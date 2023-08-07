import "./App.css";
import TimeRangePickerCustom from "./TimeRangePickerCustom";

function App() {
  const data = [
    { startTime: "12:00 AM", endTime: "12:15 AM", isAvailable: false },
    { startTime: "12:15 AM", endTime: "12:30 AM", isAvailable: false },
    { startTime: "12:30 AM", endTime: "12:45 AM", isAvailable: false },
    { startTime: "12:45 AM", endTime: "01:00 AM", isAvailable: false },
    { startTime: "01:00 AM", endTime: "01:15 AM", isAvailable: true },
    { startTime: "01:15 AM", endTime: "01:30 AM", isAvailable: true },
    { startTime: "01:30 AM", endTime: "01:45 AM", isAvailable: true },
    { startTime: "01:45 AM", endTime: "02:00 AM", isAvailable: false },
    { startTime: "02:00 AM", endTime: "02:15 AM", isAvailable: true },
    { startTime: "02:15 AM", endTime: "02:30 AM", isAvailable: false },
    { startTime: "02:30 AM", endTime: "02:45 AM", isAvailable: false },
    { startTime: "02:45 AM", endTime: "03:00 AM", isAvailable: true },
    { startTime: "03:00 AM", endTime: "03:15 AM", isAvailable: true },
    { startTime: "03:15 AM", endTime: "03:30 AM", isAvailable: true },
    { startTime: "03:30 AM", endTime: "03:45 AM", isAvailable: true },
    { startTime: "03:45 AM", endTime: "04:00 AM", isAvailable: true },
    { startTime: "04:00 AM", endTime: "04:15 AM", isAvailable: true },
    { startTime: "04:15 AM", endTime: "04:30 AM", isAvailable: true },
    { startTime: "04:30 AM", endTime: "04:45 AM", isAvailable: true },
    { startTime: "04:45 AM", endTime: "05:00 AM", isAvailable: true },
    { startTime: "05:00 AM", endTime: "05:15 AM", isAvailable: true },
    { startTime: "05:15 AM", endTime: "05:30 AM", isAvailable: true },
    { startTime: "05:30 AM", endTime: "05:45 AM", isAvailable: true },
    { startTime: "05:45 AM", endTime: "06:00 AM", isAvailable: true },
    { startTime: "06:00 AM", endTime: "06:15 AM", isAvailable: true },
    { startTime: "06:15 AM", endTime: "06:30 AM", isAvailable: true },
    { startTime: "06:30 AM", endTime: "06:45 AM", isAvailable: true },
    { startTime: "06:45 AM", endTime: "07:00 AM", isAvailable: true },
    { startTime: "07:00 AM", endTime: "07:15 AM", isAvailable: false },
    { startTime: "07:15 AM", endTime: "07:30 AM", isAvailable: false },
    { startTime: "07:30 AM", endTime: "07:45 AM", isAvailable: false },
    { startTime: "07:45 AM", endTime: "08:00 AM", isAvailable: false },
    { startTime: "08:00 AM", endTime: "08:15 AM", isAvailable: false },
    { startTime: "08:15 AM", endTime: "08:30 AM", isAvailable: false },
    { startTime: "08:30 AM", endTime: "08:45 AM", isAvailable: false },
    { startTime: "08:45 AM", endTime: "09:00 AM", isAvailable: false },
    { startTime: "09:00 AM", endTime: "09:15 AM", isAvailable: false },
    { startTime: "09:15 AM", endTime: "09:30 AM", isAvailable: false },
    { startTime: "09:30 AM", endTime: "09:45 AM", isAvailable: false },
    { startTime: "09:45 AM", endTime: "10:00 AM", isAvailable: false },
    { startTime: "10:00 AM", endTime: "10:15 AM", isAvailable: false },
    { startTime: "10:15 AM", endTime: "10:30 AM", isAvailable: false },
    { startTime: "10:30 AM", endTime: "10:45 AM", isAvailable: false },
    { startTime: "10:45 AM", endTime: "11:00 AM", isAvailable: false },
    { startTime: "11:00 AM", endTime: "11:15 AM", isAvailable: false },
    { startTime: "11:15 AM", endTime: "11:30 AM", isAvailable: false },
    { startTime: "11:30 AM", endTime: "11:45 AM", isAvailable: false },
    { startTime: "11:45 AM", endTime: "12:00 PM", isAvailable: false },
  ];
  const maxTime = 120;

  return (
    <>
      <TimeRangePickerCustom data={data} maxTime={maxTime} />
    </>
  );
}

export default App;
