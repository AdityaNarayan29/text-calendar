import React from 'react';
import './App.css';
import ActivityCalendarComponent from "./ActivityCalenderComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActivityCalendarComponent 
          header="Hari Putra! Ha ha ha"
          message="Hari Putra! Ha ha ha"
          blockMargin={3}
          blockRadius={9}
          blockSize={9}
          loading={false}
        />
      </header>
    </div>
  );
}

export default App;
