import React, { useState } from 'react';

const CallWrapUp = () => {
  const [disposition, setDisposition] = useState('');

  const dispositionOptions = [
    'Pricing information acquired',
    'Ring no answer',
    'Unable to reach proper person/department',
    'Requested service not available',
    'Pricing information refused',
  ];

  return (
    <div className="bg-white p-4 w-1/2  mt-6">
      <h3 className="font-bold text-md mb-2">
        <span className="text-red-500 mr-2">☎️</span> Call Wrap Up <span className="text-red-500">*</span>
      </h3>

      <select
        value={disposition}
        onChange={(e) => setDisposition(e.target.value)}
        className="w-[280px] border px-3 py-2 rounded mb-4"
      >
        <option value="">Select Disposition</option>
        {dispositionOptions.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>

      <button
        disabled={!disposition}
        className={` py-2 px-4 rounded text-white font-semibold ${
          disposition ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Save and End Call
      </button>
    </div>
  );
};

export default CallWrapUp;
