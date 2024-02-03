import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

const Stopwatch = () => {
  return (
    <section className="flex flex-col justify-center max-w-sm px-8 pt-6 pb-8 m-auto mb-4 bg-white rounded shadow-md w-fit mt-36">
      <Timer />
      <div className="flex justify-between pb-8 text-sm text-white select-none">
        <Button label="리셋" code="L" color="gray" />
        <Button label="시작" code="S" color="green" />
      </div>
      <Laps />
    </section>
  );
};

export default Stopwatch;
