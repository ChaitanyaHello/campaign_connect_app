"use client";

import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function CustomerInfo() {
  const { currentCall } = useCampaign();

  if (!currentCall) return null;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentCall?.customerInfo?.address?.zipCode)}`;


  return (
   
    <div className=" bg-white rounded-lg shadow-xl p-4 md:p-6 mb-4 items-center">
    <div className="mb-4">
      <button className="px-4 py-2 rounded-lg font-bold text-[#362b85] bg-slate-300">
        Attempt 1
      </button>
    </div>

      <div className="space-y-8 px-3">
        <div>
          <label className="font-bold">Company</label>
          <p className="text-gray-500 font-norma mt-2">{currentCall.customerInfo.company}</p>
        </div>
        <div>
          <div className="inline-flex space-x-2">
          <label className="font-bold">Address</label>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open Google Maps"
            className="hover:opacity-80"
          >
          <span className='text-xl'>🗺️</span>
          </a>
          </div>
          <ul className="text-gray-500 font-normal list-none space-y-1 mt-2">
            {currentCall?.customerInfo?.address?.street && (
              <li>{currentCall.customerInfo.address.street}</li>
            )}
            {currentCall?.customerInfo?.address?.city && currentCall?.customerInfo?.address?.state && (
              <li>
                {currentCall.customerInfo.address.city} 
              </li>
            )}
            {currentCall?.customerInfo?.address?.zipCode && (
              <li>{currentCall.customerInfo.address.state} {currentCall.customerInfo.address.zipCode}</li>
            )}
          </ul>
        </div>
      </div>
    </div>

  );
} 