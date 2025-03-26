"use client";

import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function CustomerInfo() {
  const { currentCall } = useCampaign();

  if (!currentCall) return null;

  return (
   
    <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-4">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Customer Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm md:text-base font-medium text-gray-700">Company</label>
          <p className="mt-1 text-sm md:text-base text-gray-900">{currentCall.customerInfo.company}</p>
        </div>
        <div>
          <label className="block text-sm md:text-base font-medium text-gray-700">Address</label>
          <p className="mt-1 text-sm md:text-base text-gray-900">
            {currentCall.customerInfo.address.street}<br />
            {currentCall.customerInfo.address.city}, {currentCall.customerInfo.address.state} {currentCall.customerInfo.address.zipCode}
          </p>
        </div>
      </div>
    </div>
   
  );
} 