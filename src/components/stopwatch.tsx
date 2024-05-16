import { useState } from "react";

export default function stopwatch(){
  const [time, setTime] = useState({
    ms: 0,
		sec: 0,
		min: 0,
		hr: 0
	});

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [intervalId, setIntervalId] = useState();

	const updateTimer = () => {
		setTime((prev) => {
			const newTime = { ...prev };
      if (newTime.ms < 100) {newTime.ms += 1}
			// update sec and see if we need to increase min
			else if(newTime.ms == 100) {
        newTime.sec += 1;
        newTime.ms = 0;
      }
		  if(newTime.sec === 60){
        newTime.min += 1;
        newTime.ms = 0;
				newTime.sec = 0;
			}
			// min has increased in *newTime* by now if it was updated, see if it has crossed 59
			if (newTime.min === 60) {
        newTime.ms = 0;
				newTime.min = 0;
				newTime.hr += 1;
			}
      console.log(newTime);
      
    

			return newTime;
    })
	};
  

	const start = () => {
		let id = setInterval(updateTimer, 10);
			setIntervalId(id);
	};

  const pause = () => {
		clearInterval(intervalId);
		setIntervalId("");
	};

	const reset = () => {
		clearInterval(intervalId);
		setTime({
      ms: 0,
			sec: 0,
			min: 0,
			hr: 0
		});
	};
  
    return (
      <div className="card text-center">
        <div className="card-body">
          <h2 className="card-title mb-3">React-Stopwatch</h2>

          <h3 className="card-subtitle mb-2 text-body-secondary mb-5">
            <div className="text-center">
            {`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec} : ${time.ms < 10 ? 0 : ""}${time.ms}`}
              {/* <span>00</span> : <span>00</span> : <span> 00</span> */}
            </div>
          </h3>

          <div className="d-flex">
            <button type="button" onClick={start} className="btn btn-success btn-lg mx-3">
              Start
            </button>
            <button type="button" onClick={pause} className="btn btn-primary btn-lg mx-3">
              Pause
            </button>
            <button type="button" onClick={reset} className="btn btn-danger btn-lg mx-3">
              Reset
            </button>
          </div>
        </div>
      </div>
    );
}
