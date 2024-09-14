import React from 'react';

function JobDuties({ tabs, currentItem }) {
  return (
    <div className="flex">
      <h4>{tabs[currentItem].title}</h4>
      <h4>{tabs[currentItem].company}</h4>
      <h5>{tabs[currentItem].dates}</h5>
      <p>{tabs[currentItem].duties}</p>
    </div>
  );
}

export default JobDuties;
