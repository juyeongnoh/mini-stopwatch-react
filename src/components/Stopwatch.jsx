import useTimer from '../hooks/useTimer';
import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

const Stopwatch = () => {
  const { start, pause, createLap, reset, laps, centisecond, isRunning } =
    useTimer();

  return (
    <section className="flex flex-col justify-center max-w-sm px-8 pt-6 pb-8 m-auto mb-4 bg-white rounded shadow-md w-fit mt-36">
      <Timer centisecond={centisecond} />
      <div className="flex justify-between pb-8 text-sm text-white select-none">
        <Button
          label={isRunning ? '랩' : '리셋'}
          code="L"
          color="bg-gray-600"
          onClickHandler={isRunning ? createLap : reset}
        />
        <Button
          label={isRunning ? '중단' : '시작'}
          code="S"
          color={isRunning ? 'bg-red-600' : 'bg-green-600'}
          onClickHandler={isRunning ? pause : start}
        />
      </div>
      <Laps laps={laps} />
    </section>
  );
};

export default Stopwatch;
