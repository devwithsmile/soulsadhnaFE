"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import {
  FaCreditCard,
  FaPaypal,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function PaymentGateway() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Card number formatting and validation
  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ")
      .slice(0, 19);
  };

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};

    // Card number validation
    if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardDetails.cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
    }

    // Name validation
    if (cardDetails.cardName.trim().length < 3) {
      newErrors.cardName = "Invalid cardholder name";
    }

    // Expiry validation
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.expiry)) {
      newErrors.expiry = "Invalid expiry (MM/YY)";
    }

    // CVV validation
    if (!/^\d{3,4}$/.test(cardDetails.cvv)) {
      newErrors.cvv = "Invalid CVV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        // Simulated payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setPaymentStatus("success");

        // Redirect to home page after successful payment
        setTimeout(() => {
          router.push("/home");
        }, 2000);
      } catch (error) {
        setPaymentStatus("error");
      }
    }

    setIsSubmitting(false);
  };

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = formatCardNumber(value);
    }

    if (name === "expiry") {
      // Auto-format expiry
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{2})/, "$1/$2")
        .slice(0, 5);
    }

    setCardDetails((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
        <div className="flex justify-center mb-6">
          <RiSecurePaymentLine className="text-indigo-600" size={48} />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Complete Your Payment
        </h2>

        {/* Payment Method Selection */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setPaymentMethod("credit")}
            className={`flex items-center px-4 py-2 rounded-lg ${
              paymentMethod === "credit"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <FaCreditCard className="mr-2" /> Credit Card
          </button>
          <button
            onClick={() => setPaymentMethod("paypal")}
            className={`flex items-center px-4 py-2 rounded-lg ${
              paymentMethod === "paypal"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <FaPaypal className="mr-2" /> PayPal
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Card Number Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.cardNumber
                  ? "border-red-500"
                  : "border-gray-300 focus:border-indigo-500"
              }`}
              maxLength="19"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
            )}
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Cardholder Name</label>
            <input
              type="text"
              name="cardName"
              value={cardDetails.cardName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.cardName
                  ? "border-red-500"
                  : "border-gray-300 focus:border-indigo-500"
              }`}
            />
            {errors.cardName && (
              <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
            )}
          </div>

          {/* Expiry and CVV Row */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Expiry</label>
              <input
                type="text"
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleInputChange}
                placeholder="MM/YY"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.expiry
                    ? "border-red-500"
                    : "border-gray-300 focus:border-indigo-500"
                }`}
                maxLength="5"
              />
              {errors.expiry && (
                <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                placeholder="123"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.cvv
                    ? "border-red-500"
                    : "border-gray-300 focus:border-indigo-500"
                }`}
                maxLength="4"
              />
              {errors.cvv && (
                <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
          >
            {isSubmitting ? "Processing..." : "Pay Now"}
          </button>
        </form>

        {/* Payment Status Modal */}
        {paymentStatus && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl text-center">
              {paymentStatus === "success" ? (
                <>
                  <FaCheckCircle
                    className="text-green-500 mx-auto mb-4"
                    size={64}
                  />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    Payment Successful!
                  </h3>
                  <p>Your transaction has been completed.</p>
                </>
              ) : (
                <>
                  <FaExclamationCircle
                    className="text-red-500 mx-auto mb-4"
                    size={64}
                  />
                  <h3 className="text-2xl font-bold text-red-700 mb-2">
                    Payment Failed
                  </h3>
                  <p>Please try again or contact support.</p>
                </>
              )}
              <button
                onClick={() => setPaymentStatus(null)}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
