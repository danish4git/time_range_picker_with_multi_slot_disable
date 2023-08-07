import React, { useState, useEffect } from "react";
import "./TimeRangePickerCustom.css";

const TimeRangePickerCustom = ({ data, maxTime }) => {
  const [selectedIndex, setselectedIndex] = useState([]);
  const [selectedStartTime, setselectedStartTime] = useState();
  const [selectedEndTime, setselectedEndTime] = useState();
  const [slots, setslots] = useState([]);
  const [nextAvailableSlots, setnextAvailableSlots] = useState();
  const [selectedCTA, setselectedCTA] = useState(0);

  const rangeHandler = (e, i) => {
    setselectedCTA("");
    if (e.isAvailable) {
      setselectedIndex([i]);
      setselectedStartTime(e?.startTime);
      setselectedEndTime(e?.endTime);

      let latestInd = 0;
      for (let j = i + 1; j < data.length; j++) {
        if (data[j].isAvailable == false) {
          break;
        } else {
          latestInd++;
        }
      }
      setnextAvailableSlots(latestInd);
    }
  };

  const timeSelectionHandler = (e, i) => {
    setselectedCTA(i);
    let count = e / 15;
    let ind = selectedIndex[0];
    let nar = [ind];

    let ncount = ind;

    for (let c = 1; c < count; c++) {
      nar.push(ncount + 1);
      ncount++;
    }

    setselectedIndex(nar);
    setselectedEndTime(data[nar[nar.length - 1]].endTime);
  };

  useEffect(() => {
    const ar = [15];
    let time = 15;
    for (let i = 1; i < maxTime / 15; i++) {
      time = time + 15;
      ar.push(time);
    }
    setslots(ar);
  }, []);

  return (
    <>
      <div className="label">Select start time</div>
      <div className="TimeRangePickerCustom">
        <div className="TimeRangePickerCustomContainer">
          {data?.map((e, i) => {
            return (
              <div className="divContainer">
                <div className="timeDiv">{e?.startTime}</div>
                <div
                  className={`${!e.isAvailable && "disabled"} ${
                    selectedIndex.includes(i) && "selected"
                  }  block`}
                  onClick={() => {
                    rangeHandler(e, i);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="label">Select duration</div>

      <div className="availableTimeSlotsMain">
        <div className="availableTimeSlots">
          {slots.map((e, i) => {
            return (
              <>
                {i <= nextAvailableSlots && (
                  <div
                    className={selectedCTA == i && "selectedCTA"}
                    onClick={() => {
                      timeSelectionHandler(e, i);
                    }}
                  >
                    {e} min
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div>selected start time : {selectedStartTime}</div>
      <div>selected end time : {selectedEndTime}</div>
    </>
  );
};

export default TimeRangePickerCustom;
