import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobDuties from './JobDuties';

const url = 'https://www.course-api.com/react-tabs-project';

function Tabs() {
  const [tabs, setTabs] = useState([]);
  const [buttons, setButtons] = useState('');
  const [currentItem, setCurrentItem] = useState(0);

  async function getTabsInfo() {
    try {
      const res = await axios.get(url);

      console.log(res.data);
      setTabs(res.data);
      setButtons(res.data.map((item) => item.company));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTabsInfo();
  }, []);

  console.log(buttons[0]);

  return (
    <div className="container">
      <div className="btn-container">
        <button onClick={() => setCurrentItem(0)} className="btn">
          {buttons[0]}
        </button>
        <button onClick={() => setCurrentItem(1)} className="btn">
          {buttons[1]}
        </button>
        <button onClick={() => setCurrentItem(2)} className="btn">
          {buttons[2]}
        </button>
      </div>

      <div className="flex">
        <JobDuties tabs={tabs} currentItem={currentItem} />
      </div>
    </div>
  );
}

export default Tabs;
