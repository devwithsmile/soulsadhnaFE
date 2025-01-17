import { UserListItem } from "./UserListItem";

export function UserList({ users, onDeleteUser }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <UserListItem key={user.id} user={user} onDelete={onDeleteUser} />
        ))}
      </ul>
    </div>
  );
}
