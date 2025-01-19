import { useState, useEffect } from "react";
import { UserList } from "./UserList";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Dummy user data (expanded)
const dummyUsers = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: [
    "Kavya Nair",
    "Vishal Gupta",
    "Rajesh Kumar",
    "Isha Malhotra",
    "Bhavesh Patel",
    "Meera Joshi",
    "Sanya Sharma",
    "Ananya Gupta",
    "Farhan Khan",
    "Pooja Bhatia",
    "Geeta Verma",
    "Lakshay Agarwal",
    "Jai Desai",
    "Nikhil Rao",
    "Himanshu Singh",
    "Aarav Sharma",
    "Tanishq Yadav",
    "Deepak Kumar",
    "Chandni Mehta",
    "Esha Reddy",
  ][index % 20],
  email: `user${index + 1}@example.com`,
}));

export function AdminUserManagement() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    // Set dummy data initially
    setUsers(dummyUsers);
    // fetchUsers();
  }, []);

  // Keep fetchUsers for future API integration
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
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
    }
  };

  // Pagination calculations
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (error) {
    return (
      <div
        className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <UserList
        users={currentUsers}
        totalUsers={users.length}
        currentPage={currentPage}
        usersPerPage={usersPerPage}
      />

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 py-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md text-base font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdKeyboardArrowLeft />
        </button>

        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((num) => {
              // Show first page, last page, current page, and pages around current page
              return (
                num === 1 ||
                num === totalPages ||
                Math.abs(currentPage - num) <= 1
              );
            })
            .map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${currentPage === number
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                  }`}
              >
                {number}
              </button>
            ))}
        </div>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md text-base font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
