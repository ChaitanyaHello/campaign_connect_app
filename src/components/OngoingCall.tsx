"use client";

import React, { useState, useEffect } from "react";
import { useCampaign } from "../context/CampaignContext";

export default function OngoingCall() {
  const { currentCall, updateCallStatus, transferCall, agent, setCurrentCallById } = useCampaign();

  const [callDuration, setCallDuration] = useState("00:00:00");
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!currentCall) return;

    const startTime = new Date();
    const timer = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;
      setCallDuration(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [currentCall]);

  if (!currentCall || !agent) return null;

  const handleEndCall = () => {
    updateCallStatus(currentCall.id, "ended");
    setCurrentCallById("");
  };

  const handleTransfer = () => {
    const nextAgentId = "2";
    transferCall(currentCall.id, agent.id, nextAgentId, "Customer requested transfer");
  };

  return (
    <div className="w-[262px] bg-[#1C1C1E] rounded-xl shadow-xl overflow-hidden text-white font-sans  ">
      {/* Profile Circle */}
      <div className="flex flex-col items-center mt-6">
        <div className="w-20 h-20 rounded-full bg-[#2F3237] flex items-center justify-center text-xl font-bold mb-2">
          JL
        </div>
        <div className="text-lg font-semibold">{currentCall?.callInfo?.number}</div>
        <div className="text-sm text-gray-400 mt-1">Ongoing Call</div>

        {/* Green Dot + Timer */}
        <div className="flex items-center space-x-2 mt-1">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
          <span className="text-sm text-gray-300">{callDuration}</span>
        </div>
      </div>

      {/* Middle Control Buttons */}
      <div className="bg-[#2F3237] p-5 mt-10">
      <div className="flex justify-between ">
        {/* Mute */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-10 h-10 rounded-md bg-[#1C1C1E] flex items-center justify-center hover:scale-110 transition"
        >
          <i className="fas fa-microphone-slash text-white"></i>
        </button>

        {/* Pause */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="w-10 h-10 rounded-md bg-[#1C1C1E] flex items-center justify-center hover:scale-110 transition"
        >
          <i className="fas fa-pause text-white"></i>
        </button>

        {/* Keypad */}
        <button
          onClick={() => alert("Open keypad")}
          className="w-10 h-10 rounded-md bg-[#1C1C1E] flex items-center justify-center hover:scale-110 transition"
        >
          <i className="fas fa-th text-white"></i>
        </button>
      </div>

      {/* End Call Button */}
      <div className="mt-4">
        <button
          onClick={handleEndCall}
          className="w-full h-10 rounded bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center hover:scale-105 transition"
        >
          <i className="fas fa-phone-slash text-white text-lg"></i>
        </button>
      </div>
      </div>
    </div>
  );
}
