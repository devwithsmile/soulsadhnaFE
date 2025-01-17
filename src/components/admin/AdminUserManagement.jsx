import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { UserList } from "./UserList";

// Dummy user data
const dummyUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Admin" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", role: "User" },
  { id: 5, name: "Edward Elric", email: "edward@example.com", role: "User" },
  { id: 6, name: "Fiona Gallagher", email: "fiona@example.com", role: "Admin" },
  { id: 7, name: "George Costanza", email: "george@example.com", role: "User" },
  { id: 8, name: "Hannah Baker", email: "hannah@example.com", role: "User" },
  { id: 9, name: "Ian Malcolm", email: "ian@example.com", role: "User" },
  { id: 10, name: "Jessica Jones", email: "jessica@example.com", role: "User" },
];

export function AdminUserManagement() {
  const { user } = useAuth();
  const [users, setUsers] = useState(dummyUsers); // Set initial users to dummy data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
    // fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUsers(users.filter((u) => u.id !== userId));
    } catch (err) {
      console.error("Error deleting user:", err);
      // You might want to show an error message to the user
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center py-4">Error: {error}</div>;
  }

  return <UserList users={users} onDeleteUser={handleDeleteUser} />;
}
