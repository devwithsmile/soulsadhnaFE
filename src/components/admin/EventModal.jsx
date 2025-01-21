"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaXmark } from "react-icons/fa6";

export function EventModal({ event, onClose, isOpen }) {
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
  const [success, setSuccess] = useState(false);

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
      // Convert date from "DD-MM-YYYY" to "YYYY-MM-DD" for input type="date"
      const [day, month, year] = event.date.split("-");
      const formattedDate = `${year}-${month}-${day}`;

      reset({
        title: event.title,
        description: event.description,
        date: formattedDate, // Now in YYYY-MM-DD format for the date input
        startTime: event.startTime,
        endTime: event.endTime,
        price: event.price,
      });
    }
    // Reset states when modal opens
    setError(null);
    setSuccess(false);
  }, [event, reset]);

  const onSubmit = async (data) => {
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("token");
      const url = `${process.env.NEXT_PUBLIC_API_URL}/admin/events/${event._id}`;

      // Convert date back to "DD-MM-YYYY" format for the API
      const [year, month, day] = data.date.split("-");
      const formattedDate = `${day}-${month}-${year}`;

      const formatTime = (time) => {
        return time.split(":").slice(0, 2).join(":");
      };

      await axios({
        method: "put",
        url,
        data: {
          ...data,
          date: formattedDate, // Now in DD-MM-YYYY format for the API
          startTime: formatTime(data.startTime),
          endTime: formatTime(data.endTime),
          price: parseFloat(data.price),
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1500); // Close modal after showing success message
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save event");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 px-4 py-6 sm:p-0">
      <div className="flex min-h-full items-end justify-center sm:items-center">
        <div className="relative w-full max-w-lg transform rounded-lg bg-white px-4 pb-4 pt-5 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
            <button
              onClick={onClose}
              className="rounded-md bg-white text-gray-400 hover:text-gray-500"
            >
              <FaXmark className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {event ? "Edit Event" : "Create New Event"}
                </h3>
                <button
                  onClick={onClose}
                  className="sm:hidden rounded-md bg-white text-gray-400 hover:text-gray-500"
                >
                  <FaXmark className="h-6 w-6" />
                </button>
              </div>

              {error && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative text-sm">
                  Event updated successfully!
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Title Input */}
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
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  {errors.title && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Description Textarea */}
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
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Date Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    {...register("date", {
                      required: "Date is required",
                    })}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  {errors.date && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                {/* Time Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.startTime && (
                      <p className="mt-1 text-xs text-red-600">
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
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.endTime && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.endTime.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Price Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    {...register("price", {
                      required: "Price is required",
                      min: { value: 0, message: "Price must be positive" },
                      max: {
                        value: 99999.99,
                        message: "Price cannot exceed 99,999.99",
                      },
                      validate: {
                        validFormat: (value) => {
                          const stringValue = value.toString();
                          return (
                            /^\d+(\.\d{0,2})?$/.test(stringValue) ||
                            "Price must have up to 2 decimal places"
                          );
                        },
                        isNumber: (value) =>
                          !isNaN(parseFloat(value)) ||
                          "Please enter a valid number",
                      },
                      setValueAs: (value) => {
                        return parseFloat(parseFloat(value).toFixed(2));
                      },
                    })}
                    onWheel={(e) => e.target.blur()}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  {errors.price && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 space-y-3 space-y-reverse sm:space-y-0">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:w-auto"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50 sm:w-auto"
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
