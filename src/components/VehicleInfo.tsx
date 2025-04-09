import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function VehicleInfo() {
  const { currentCall } = useCampaign();

  if (!currentCall) return null;

  return (
    <div className="bg-gray-100 p-8 space-y-8 rounded-md w-[350px]">
      <h3 className="font-bold text-lg flex items-center mb-4">
        <span className="mr-2 text-xl">
          🚘
        </span>
        Vehicle Information
      </h3>
      <div className="mb-4">
        <p className="font-bold text-gray-700">Vehicle</p>
        <p className="text-xl font-semibold text-gray-800">
          {`${currentCall.vehicleInfo.year} ${currentCall.vehicleInfo.make} ${currentCall.vehicleInfo.model} ${currentCall.vehicleInfo.type}`}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-gray-700">Target</p>
        <p className="text-gray-800">{currentCall.vehicleInfo?.target || '_____'}</p>
      </div>
      <div>
        <p className="font-bold text-gray-700">Service</p>
        <p className="text-gray-800">{currentCall.vehicleInfo?.replace || '_____'}</p>
      </div>
    </div>
  );
}
