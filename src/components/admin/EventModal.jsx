"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaXmark } from "react-icons/fa6";

export function EventModal({ event, onClose, onSave }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
      price: "",
    },
  });

  const [error, setError] = useState(null);

  // Watch both time fields for validation
  const startTime = watch("startTime");
  const endTime = watch("endTime");

  // Helper function to compare times
  const isValidTimeRange = (start, end) => {
    if (!start || !end) return true;

    // Convert times to minutes since midnight for easier comparison
    const getMinutes = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };

    const startMinutes = getMinutes(start);
    const endMinutes = getMinutes(end);

    return startMinutes < endMinutes;
  };

  useEffect(() => {
    if (event) {
      reset({
        title: event.title,
        description: event.description,
        date: new Date(event.date).toISOString().split("T")[0],
        startTime: event.startTime,
        endTime: event.endTime,
        price: event.price,
      });
    }
  }, [event, reset]);

  const onSubmit = async (data) => {
    setError(null);
    // console.log("data + id", data, event._id);

    try {
      const token = localStorage.getItem("token");
      const url = event
        ? `${process.env.NEXT_PUBLIC_API_URL}/admin/events/${event._id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/admin/events`;

      const method = event ? "put" : "post";

      const formattedDate = new Date(data.date)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .split("/")
        .join("-");

      // Format times to ensure 24-hour format
      const formatTime = (time) => {
        return time.split(":").slice(0, 2).join(":"); // Ensures HH:mm format
      };

      console.log("formattedDate", formattedDate);
      console.log("formatTime", formatTime(data.startTime));
      console.log("formatTime", formatTime(data.endTime));

      await axios({
        method,
        url,
        data: {
          ...data,
          date: formattedDate,
          startTime: formatTime(data.startTime),
          endTime: formatTime(data.endTime),
          price: parseFloat(data.price),
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      onSave();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save event");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            {event ? "Edit Event" : "Create New Event"}
          </h3>
          <button onClick={onClose}>
            <FaXmark className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
                maxLength: {
                  value: 100,
                  message: "Title must not exceed 100 characters",
                },
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
                maxLength: {
                  value: 1000,
                  message: "Description must not exceed 1000 characters",
                },
              })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              {...register("date", {
                required: "Date is required",
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Time
              </label>
              <input
                type="time"
                {...register("startTime", {
                  required: "Start time is required",
                  validate: {
                    validRange: (value) =>
                      !endTime ||
                      isValidTimeRange(value, endTime) ||
                      "Start time must be before end time",
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.startTime && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.startTime.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Time
              </label>
              <input
                type="time"
                {...register("endTime", {
                  required: "End time is required",
                  validate: {
                    validRange: (value) =>
                      !startTime ||
                      isValidTimeRange(startTime, value) ||
                      "End time must be after start time",
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.endTime && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.endTime.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price (₹)
            </label>
            <input
              type="number"
              step="1"
              min="0"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price must be positive" },
                max: {
                  value: 99999.99,
                  message: "Price cannot exceed 99,999.99",
                },
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message:
                    "Price must be a valid number with up to 2 decimal places",
                },
                validate: {
                  isNumber: (value) =>
                    !isNaN(value) || "Please enter a valid number",
                },
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-600">
                {errors.price.message}
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
