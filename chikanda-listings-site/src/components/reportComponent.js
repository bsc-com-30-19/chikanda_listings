import React from 'react';

export default function ReportC({ reports }) {
  return (
    <>
    <div className="rounded-lg px-4 py-2">
      <h2 className="mb-2 bg-p_cyan text-left font-bold">Sent Reports and Requests</h2>
      <table className="border-collapse">
        <tbody>
          {reports.map((report, index) => (
            <><tr key={index}>
              <td className="px-2 py-1 font-bold">Title:</td>
              <td className="px-2 py-1">{report.title}</td>
              <th className="px-2 py-1" rowspan="3">
                Status: {report.status}
              </th>
            </tr><tr key={index + 'type'}>
                <td className="px-2 py-1">Type:</td>
                <td className="px-2 py-1">{report.type}</td>
              </tr><tr key={index + 'date'}>
                <td className="px-2 py-1">Date sent:</td>
                <td className="px-2 py-1">{report.dateSent}</td>
              </tr></>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
