import React, { useState } from 'react';

export default function ReportRequest({ onReportSubmit }) {
  const [type, setType] = useState('Request');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Prepare report data
    const reportData = {
      type,
      title,
      description,
      status: 'Pending',
      dateSent: new Date().toLocaleDateString(), // Current date
    };

    onReportSubmit(reportData);

    setType('Request');
    setTitle('');
    setDescription('');
  };

  return (
    <div className="rounded-lg px-4 py-2">
      <h2 className="mb-2 bg-p_cyan text-left font-bold">Make Request or Report</h2>
      <table className="border-collapse">
        <tbody>
          <tr>
            <td className="px-2 py-1">
              <input
                type="radio"
                id="option_a"
                name="my_radio_group"
                value="Request"
                checked={type === 'Request'}
                onChange={() => setType('Request')}
              />
              <label htmlFor="option_a">Request</label>
              <br />
              <input
                type="radio"
                id="option_b"
                name="my_radio_group"
                value="Report"
                checked={type === 'Report'}
                onChange={() => setType('Report')}
              />
              <label htmlFor="option_b">Report</label>
            </td>
          </tr>
          <tr>
            <td className="px-2 py-1">Title:</td>
          </tr>
          <tr>
            <td className="px-2 py-1">
              <input
                type="text"
                placeholder="Title here:"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="px-2 py-1">Description:</td>
          </tr>
          <tr>
            <td className="px-2 py-1">
              <input
                type="text"
                placeholder="Provide a description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="justify-items-center">
      <button className="bg-cyan-700 border rounded-3xl text-white w-1/2 h-8" onClick={handleSubmit}>
        Submit
      </button>
      </div>
     
    </div>
  );
}
