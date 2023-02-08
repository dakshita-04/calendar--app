import React, { useState } from 'react';

const availableTimeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

const SelectTimeSlot = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleTimeSlotClick = timeSlot => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <div>
      <h2>Select a time slot:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {availableTimeSlots.map(timeSlot => (
          <div
            key={timeSlot}
            onClick={() => handleTimeSlotClick(timeSlot)}
            style={{
              padding: '10px',
              backgroundColor: selectedTimeSlot === timeSlot ? 'lightgray' : 'white',
              cursor: 'pointer',
              margin: '10px'
            }}
          >
            {timeSlot}
          </div>
        ))}
      </div>
      {selectedTimeSlot && <p>Selected time slot: {selectedTimeSlot}</p>}
    </div>
  );
};

export default SelectTimeSlot;
