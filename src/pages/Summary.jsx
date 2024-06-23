import React from "react";

function Summary({data}) {
  return (
    <div className="summary">
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Age:</strong> {data.age}
      </p>
      {data.isAttendingWithGuest && (
        <p>
          <strong>Guest Name:</strong> {data.guestName}
        </p>
      )}
    </div>
  );
}

export default Summary;
