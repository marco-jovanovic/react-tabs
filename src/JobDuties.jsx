import React from 'react';
import JobInfo from './JobInfo';

function JobDuties({ tabs }) {
  console.log(tabs[0].dates);

  {
    return tabs.map((tab) => {
      const { id, duties, title, company, dates } = tab; //destructuring

      return (
        <div className="flex">
          <JobInfo
            title={title}
            key={id}
            duties={duties}
            company={company}
            dates={dates}
          />
        </div>
      );
    });
  }
}

export default JobDuties;
