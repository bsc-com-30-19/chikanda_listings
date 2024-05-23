import React, { useState, useEffect, useMemo } from 'react';

const EmailTable = ({ statusFilter }) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const emailsPerPage = 3;

  const allEmails = useMemo(() => [
    { name: 'Dr Isaac', dateSent: '10/05/2024', status: 'Pending' },
    { name: 'Paul', dateSent: '10/04/2024', status: 'Declined' },
    { name: 'Charles', dateSent: '10/03/2024', status: 'Accepted' },
    { name: 'Belo', dateSent: '10/02/2024', status: 'Pending' },
    { name: 'Takondwa', dateSent: '10/01/2024', status: 'Declined' },
    { name: 'Ruth', dateSent: '09/30/2024', status: 'Accepted' },
    { name: 'Justice', dateSent: '09/29/2024', status: 'Pending' },
  ], []);

  const [filteredEmails, setFilteredEmails] = useState(allEmails);

  useEffect(() => {
    if (statusFilter === 'All') {
      setFilteredEmails(allEmails);
    } else {
      setFilteredEmails(allEmails.filter(email => email.status === statusFilter));
    }
  }, [statusFilter, allEmails]);

  const totalPages = Math.ceil(filteredEmails.length / emailsPerPage);

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  };

  const handlePreviousPage = () => {
    setSelectedRowIndex(null); // Deselect any selected row when changing pages
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setSelectedRowIndex(null); // Deselect any selected row when changing pages
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const indexOfLastEmail = currentPage * emailsPerPage;
  const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
  const currentEmails = filteredEmails.slice(indexOfFirstEmail, indexOfLastEmail);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          {currentEmails.map((email, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(index)}
              className={selectedRowIndex === index ? 'bg-pink-100' : 'bg-pink-50'}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Name: {email.name}</div>
                <div className="text-sm text-gray-900">Date Sent: {email.dateSent}</div>
                <div className="text-sm text-gray-900">Status: {email.status}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex justify-end space-x-2"> {/* Added flex and justify-end */}
                {selectedRowIndex === index && (
                  <>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded" style={{ cursor: 'pointer' }}>X</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded" style={{ cursor: 'pointer' }}>✔</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ cursor: 'pointer' }}
        >
          Previous
        </button>
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ cursor: 'pointer' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmailTable;
