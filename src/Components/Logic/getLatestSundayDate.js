const getLatestSundayDate = () => {
  let today = new Date();
  let dayOfWeek = today.getDay();
  let daysToSubtract = (dayOfWeek) % 7;
  let latestSunday = new Date(today.getTime() - daysToSubtract * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  return latestSunday;
}

export default getLatestSundayDate;
