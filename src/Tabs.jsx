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

      setTabs(res.data);
      setButtons(res.data.map((item) => item.company));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTabsInfo();
  }, []);

  console.log(buttons);

  return (
    <div className="container">
      <div className="btn-container">
        <button className="btn">{buttons[0]}</button>
        <button className="btn">{buttons[1]}</button>
        <button className="btn">{buttons[2]}</button>
      </div>

      <div className="flex">
        <JobDuties tabs={tabs} />
      </div>
    </div>
  );
}

export default Tabs;
