export function UserListItem({ user }) {
  return (
    <li className="hover:bg-gray-50 transition-colors duration-150">
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center space-x-4">
          {/* User Avatar */}
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-600 font-medium text-sm">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>

          {/* User Details */}
          <div className="flex-1 min-w-0">
            <p className="text-sm md:text-base font-medium text-gray-900 truncate">
              {user.name}
            </p>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
