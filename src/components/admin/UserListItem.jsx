export function UserListItem({ user, onDelete }) {
  return (
    <li>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-indigo-600 truncate">
              {user.name}
            </p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {user.role}
            </span>
            <button
              className="text-red-600 hover:text-red-900 text-sm font-medium"
              onClick={() => {
                if (confirm("Are you sure you want to delete this user?")) {
                  onDelete(user.id);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
