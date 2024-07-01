import React from 'react';
import ActivityCalendarComponent from "./ActivityCalenderComponent";

function App() {
  return (
    <div className="App">
      <ActivityCalendarComponent
        message="Hari Putra! Ha ha ha"
        blockMargin={3}
        blockRadius={9}
        blockSize={9}
        loading={false}
        style={{ backgroundColor: "" }}
        theme={{ light: ["#a84032", "red", "blue", "yellow", "grey"], dark: ["white", "grey", "grey", "grey", "grey"]}}
      />
    </div>
  );
}

export default App;
