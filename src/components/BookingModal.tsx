'use client'
import React from 'react';
import { PopupButton } from 'react-calendly';

export default function BookingButton() {
  return (
    <div className="calendly-button-wrapper">
      <PopupButton
        url="https://calendly.com/ivyonblessed/30min" // REPLACE with Ivyon's actual link
        rootElement={document.getElementById("root") || document.body}
        text="Open Booking Calendar"
        className="bg-white text-[#2D3E33] px-10 py-5 rounded-full font-bold hover:bg-green-50 transition-all shadow-lg"
      />
    </div>
  );
}