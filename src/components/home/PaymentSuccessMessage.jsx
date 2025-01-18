import React, { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

export function PaymentSuccessMessage({
  onClose,
  autoCloseDelay = 60000,
  customerName = "",
  showAutoClose = false,
}) {
  useEffect(() => {
    if (showAutoClose) {
      const timer = setTimeout(() => {
        onClose?.();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [onClose, autoCloseDelay, showAutoClose]);

  return (
    <div className="relative p-4 border border-green-200 bg-green-50 rounded-lg shadow-sm transition-all duration-500 hover:shadow-md">
      <div className="flex items-start gap-4">
        <FiCheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            Payment Successful!
          </h2>
          <div className="text-green-700">
            {customerName ? (
              <>
                Thank you,{" "}
                <span className="font-medium capitalize">{customerName}</span>!
                Your payment has been processed successfully.
              </>
            ) : (
              "Your payment has been processed successfully."
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-green-600 hover:text-green-800 transition-colors duration-200 p-1 rounded-full hover:bg-green-100"
          aria-label="Close alert"
        >
          <IoIosClose className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccessMessage;
