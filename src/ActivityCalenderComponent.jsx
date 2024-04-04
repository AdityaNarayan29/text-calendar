import React from 'react';
import ActivityCalendar from 'react-activity-calendar';
import { generateListOfDaysWithLevels } from './Components/Logic/generateListOfDaysWithLevels';
import getLatestSundayDate from './Components/Logic/getLatestSundayDate';

const ActivityCalendarComponent = ({ header, message, ...rest }) => {

  const text = message.toUpperCase();
  const latestSundayDate = getLatestSundayDate();
  const result = generateListOfDaysWithLevels(latestSundayDate, text);

  return (
    <>
      <h2>{header}</h2>
      <ActivityCalendar
        loading={false}
        hideColorLegend={true}
        hideMonthLabels={true}
        hideTotalCount={true}
        data={result} {...rest} />
    </>
  );
};

export default ActivityCalendarComponent;
