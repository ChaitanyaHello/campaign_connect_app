import React, { useState, useEffect } from 'react';
import { useCampaign } from '../context/CampaignContext';
import CallWrapUp from './CallWrap';

export default function ServiceInfo() {
  const { currentCall, updateCallInfo } = useCampaign();
  const [labor, setLabor] = useState(currentCall?.serviceInfo.labor || 0);
  const [parts, setParts] = useState(currentCall?.serviceInfo.parts || 0);
  const [notes, setNotes] = useState(currentCall?.serviceInfo.notes || '');

  useEffect(() => {
    if (!currentCall?.id) return;
    const total = labor + parts;
    updateCallInfo(currentCall.id, {
      serviceInfo: {
        ...currentCall.serviceInfo,
        labor,
        parts,
        total,
        notes,
      },
    });
  }, [labor, parts, notes]);

  if (!currentCall) return null;

  return (
    <div className='w-full md:w-1/2'>
      <div className="bg-gray-100 p-6 rounded-md">
        <h3 className="font-bold text-lg mb-4">
          <span className='text-xl mr-2'>💵</span> Pricing Info
        </h3>
          {/* Dotted Line */}
        <div className="border-t border-dotted border-gray-400 my-4"></div>
        {/* Parts Input */}
        <div className="mb-4 flex justify-between items-center">
          <p>Parts</p>
          <div className="flex items-center gap-1 text-gray-500 font-bold">
            <span>$</span>
            <input
              type="number"
              value={parts}
              onChange={(e) => setParts(parseFloat(e.target.value))}
              className="w-20 bg-transparent text-right focus:outline-none"
            />
          </div>
        </div>

        {/* Labor Input */}
        <div className="mb-4 flex justify-between items-center">
          <p>Labor</p>
          <div className="flex items-center gap-1 text-gray-500 font-bold">
            <span>$</span>
            <input
              type="number"
              value={labor}
              onChange={(e) => setLabor(parseFloat(e.target.value))}
              className="w-20 bg-transparent text-right focus:outline-none"
            />
          </div>
        </div>

        {/* Dotted Line */}
        <div className="border-t border-dotted border-gray-400 my-4"></div>

        {/* Total */}
        <div className="mb-4 flex justify-between items-center">
          <p className="font-semibold text-lg">Total</p>
          <p className="text-black text-2xl font-bold">
  ${(
    labor && parts
      ? labor + parts
      : labor || parts || 0
  ).toFixed(2)}
</p>

        </div>
      </div>

      {/* Notes Area */}
      <textarea
        placeholder="Type Notes Here (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={3}
        className="w-full border p-3 rounded resize-none mt-2"
      />
       <CallWrapUp/>
    </div>
  );
}
