export function LoadingSpinner({ size = "default", fullScreen = false }) {
  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-12 w-12",
    large: "h-16 w-16",
  };

  const containerClasses = fullScreen
    ? "min-h-screen flex justify-center items-center"
    : "h-full flex justify-center items-center p-4";

  return (
    <div className={containerClasses}>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer circle */}
        <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>

        {/* Spinning gradient circle */}
        <div className="absolute inset-0 border-t-4 border-indigo-600 rounded-full animate-spin"></div>

        {/* Inner lotus-like shape */}
        <div className="absolute inset-2 flex items-center justify-center">
          <svg
            className="w-full h-full text-indigo-400"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="currentColor"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
