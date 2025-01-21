import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";

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
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    // Set dummy data initially
    setUsers(dummyUsers);
    setLoading(false);
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

      // Axios automatically throws for non-2xx responses
      // and response.data already contains the parsed JSON
      setUsers(response.data);
    } catch (err) {
      // Get the most specific error message available
      const errorMessage =
        err.response?.data?.message || err.message || "Failed to fetch users";
      setError(errorMessage);
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

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 h-fit">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 h-fit">
      {/* Header - Stack on mobile, row on desktop */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          User Management
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Showing {indexOfFirstUser + 1}-
          {Math.min(indexOfLastUser, users.length)} of {users.length} users
        </p>
      </div>

      {/* Table Container with horizontal scroll for small devices */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600 font-medium text-xs sm:text-sm">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <div className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-none">
                          {user.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    <div className="text-xs sm:text-sm text-gray-500 truncate max-w-[150px] sm:max-w-none">
                      {user.email}
                    </div>
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-4 sm:leading-5 font-semibold rounded-full ${
                        user.id % 2 === 0
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.id % 2 === 0 ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Responsive Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 py-4 mt-2 sm:mt-4">
        <div className="flex space-x-1">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1 sm:px-3 sm:py-1 rounded-md text-sm sm:text-base font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((num) => {
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
                  className={`p-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm font-medium min-w-[24px] sm:min-w-[32px] ${
                    currentPage === number
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
            className="p-1 sm:px-3 sm:py-1 rounded-md text-sm sm:text-base font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
