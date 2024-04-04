
const generateListOfDays = (startDate, numberOfDays) => {

  const listOfDays = [];
  const currentDate = new Date(startDate);

  for (let i = 0; i < numberOfDays; i++) {
    const dateString = currentDate.toISOString().slice(0, 10);
    listOfDays.push({ "date": dateString, "level": 0 });
    currentDate.setDate(currentDate.getDate() - 1);
  }

  return listOfDays;
};

export default generateListOfDays;