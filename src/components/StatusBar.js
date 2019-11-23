import React from 'react';
import format from 'date-fns/format';

export default function StatusBar() {
  const currentTime = format(new Date(), 'h:mm a');

  return (
    <div>
      <h2 className="status-bar__clock">{currentTime}</h2>
    </div>
  );
}
