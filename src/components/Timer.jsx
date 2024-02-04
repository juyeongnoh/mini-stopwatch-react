import formatTime from '../util/formatTime';

const Timer = ({ centisecond }) => {
  return (
    <h1 className="pb-8 text-5xl font-extrabold tracking-tighter text-center break-words">
      {formatTime(centisecond)}
    </h1>
  );
};

export default Timer;
