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
    <div className=" px-4 py-2">
      <div className=" bg-white rounded-[15px] overflow-clip">
      <div>
      <h2 className="pl-[10px] mb-2 bg-p_cyan text-left text-[32px] font-bold">
        Make Request or Report
      </h2>
      </div>
      <div className='px-[30px]'>
      <table className="border-collapse text-[24px] w-full font-semibold">
        <tbody>
          <tr>
            <td className="px-2 py-1 flex justify-between mt-[20px]">
              <div>
            <label htmlFor="option_a">Request</label>
              <input
                type="radio"
                id="option_a"
                name="my_radio_group"
                value="Request"
                checked={type === 'Request'}
                onChange={() => setType('Request')}
              />
              </div>
              <div>
              <label htmlFor="option_b">Report</label>
              <input
                type="radio"
                id="option_b"
                name="my_radio_group"
                value="Report"
                checked={type === 'Report'}
                onChange={() => setType('Report')}
              />     
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-2 py-1"><div className="mt-[18px]">Title:</div></td>
          </tr>
          <tr>
            <td className="px-2 py-1">
              <input
                className="bg-p_lave border-none w-full"
                type="text"
                placeholder="Title here:"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="px-2 py-1"><div className="mt-[18px]">Description:</div></td>
          </tr>
          <tr>
            <td className="px-2 py-1">
              <input
                className="bg-p_lave border-none w-full h-[150px] "
                type="text"
                placeholder="Provide a description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="bg-p_cyan my-[18px] border rounded-full w-fit px-[25px] py-[10px] text-white " onClick={handleSubmit}>
        Submit
      </button>
      </div>
      </div>
    </div>
  );
}
