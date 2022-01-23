import { useEffect, useState } from "react";
import { interval, Subject, fromEvent } from "rxjs";
import { takeUntil, map, buffer, debounceTime, filter } from "rxjs/operators";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let stream$ = new Subject();
    let timerObservable = interval(1000);
    timerObservable.pipe(takeUntil(stream$)).subscribe(() => {
      if (isActive === true) {
        setTimer((prev) => prev + 1000);
      }
    });

    return () => {
      stream$.next();
      stream$.complete();
      stream$.unsubscribe();
    };
  }, [isActive]);

  const start = () => {
    if (isActive !== true) {
      setIsActive(true);
    }
  };

  const stop = () => {
    if (isActive === true) {
      setIsActive(false);
    }
  };

  const wait = () => {
    const mouse$ = fromEvent(document.querySelector("#wait"), "click");
    const buff$ = mouse$.pipe(debounceTime(300));
    const click$ = mouse$.pipe(
      buffer(buff$),
      map((list) => {
        return list.length;
      }),
      filter((x) => x === 2)
    );
    click$.subscribe(() => {
      setIsActive(false);
    });
  };

  const reset = () => {
    setTimer(0);
    setIsActive(true);
  };

  return (
    <div className="App">
      <div className="timer">{new Date(timer).toISOString().slice(11, 19)}</div>
      <div className="buttons">
        {!isActive && <button onClick={start}>start</button>}
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
        <button id="wait" onClick={wait}>
          wait
        </button>
      </div>
    </div>
  );
}

export default App;
