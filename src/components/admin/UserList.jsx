import { UserListItem } from "./UserListItem";

export function UserList({ users, totalUsers, currentPage, usersPerPage }) {
  const startRange = (currentPage - 1) * usersPerPage + 1;
  const endRange = Math.min(currentPage * usersPerPage, totalUsers);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Registered Users
        </h2>
        <p className="text-sm text-gray-600">
          Showing {startRange}-{endRange} of {totalUsers} users
        </p>
      </div>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
