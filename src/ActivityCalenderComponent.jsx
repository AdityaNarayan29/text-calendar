import React from 'react';
import ActivityCalendar from 'react-activity-calendar';
import { generateListOfDaysWithLevels } from './Components/Logic/generateListOfDaysWithLevels';

const ActivityCalendarComponent = () => {

  // Example usage:
  const startDate = "2024-03-24";
  const text = ("Love if u want").toUpperCase();
const result = generateListOfDaysWithLevels(startDate, text);

return (
  <div>
    <h2>Needs wrap b4 npm</h2>
    <ActivityCalendar
      loading={false}
      hideColorLegend={true}
      hideMonthLabels={true}
      hideTotalCount={true}
      data={result} />
  </div>
);
};

export default ActivityCalendarComponent;
