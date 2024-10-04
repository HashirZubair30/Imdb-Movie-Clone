// app/loading.jsx
'use client';

import React from 'react';
import { BounceLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <BounceLoader
        color="rgba(254,243,198,255)" // Spinner color
        size={60}       // Size of the spinner
        speedMultiplier={2} // Speed multiplier
      />
    </div>
  );
}
