import React from 'react';

function JobInfo({ title, duties, company, dates }) {
  return (
    <>
      <h4>{title}</h4>
      <h5>{company}</h5>
      <p>{dates}</p>
      {duties.map((duty, index) => {
        return <p key={index}>{duty}</p>;
      })}
    </>
  );
}

export default JobInfo;
