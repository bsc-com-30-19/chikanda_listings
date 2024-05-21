import React, { useState } from 'react';

const EmailTable = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null); // Track the selected row index
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const emailsPerPage = 3; // Number of emails to display per page

  const emails = [
    { name: 'Dr Isaac', dateSent: '10/05/2024', status: 'Pending' },
    { name: 'Belo', dateSent: '10/04/2024', status: 'Declined' },
    { name: 'Snow', dateSent: '10/03/2024', status: 'Accepted' },
    { name: 'Takondwa', dateSent: '10/02/2024', status: 'Pending' },
    { name: 'Ruth', dateSent: '10/01/2024', status: 'Accepted' },
    { name: 'Paul',dateSent:  '21/05/2024',status: 'Accepted'}
    // Add more emails as needed
  ];

  const handleRowClick = (index) => {
    setSelectedRowIndex(index === selectedRowIndex ? null : index); // Toggle row selection
  };

  const handleAccept = (index) => {
    // Handle accept logic here
    console.log(`Accepted email at index: ${index}`);
  };

  const handleDecline = (index) => {
    // Handle decline logic here
    console.log(`Declined email at index: ${index}`);
  };

  const totalPages = Math.ceil(emails.length / emailsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * emailsPerPage;
  const endIndex = startIndex + emailsPerPage;
  const currentEmails = emails.slice(startIndex, endIndex);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200" style={{ width: '40rem', margin: '0 auto' }}>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentEmails.map((email, index) => (
            <tr
              key={startIndex + index}
              onClick={() => handleRowClick(startIndex + index)}
              className={selectedRowIndex === startIndex + index ? 'bg-pink-100' : 'bg-pink-50'}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Name: {email.name}</div>
                <div className="text-sm text-gray-900">Date Sent: {email.dateSent}</div>
                <div className="text-sm text-gray-900">Status: {email.status}</div>
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                {selectedRowIndex === startIndex + index && (
                  <div className="flex space-x-2 justify-end">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold h-8 w-8 flex items-center justify-center text-sm rounded"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering row click
                        handleDecline(startIndex + index);
                      }}
                    >
                      ✕
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold h-8 w-8 flex items-center justify-center text-sm rounded"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering row click
                        handleAccept(startIndex + index);
                      }}
                    >
                      ✓
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className="flex justify-between mt-4" style={{ marginTop: '20px' }}> {/* Added margin */}
          <button
            onClick={handlePrevPage}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-700'
            } text-white font-bold`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-700'
            } text-white font-bold`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailTable;
