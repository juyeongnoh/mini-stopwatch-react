import formatTime from '../util/formatTime';

const Laps = ({ laps }) => {
  const lapTimeArr = laps.reduce((acc, cur) => [...acc, cur[1]], []);
  const maxIdx = lapTimeArr.lastIndexOf(Math.max(...lapTimeArr));
  const minIdx = lapTimeArr.lastIndexOf(Math.min(...lapTimeArr));

  const minMaxStyle = (idx) => {
    if (laps.length < 2) return;
    if (idx === maxIdx) {
      return 'text-red-600';
    }
    if (idx === minIdx) {
      return 'text-green-600';
    }
    return '';
  };

  return (
    <article className="h-64 overflow-auto text-gray-600 border-t-2">
      <ul>
        {laps.map(([lapCount, lapTime], idx) => (
          <li
            key={lapCount}
            className={`flex justify-between px-3 py-2 border-b-2 ${minMaxStyle(
              idx
            )}`}
          >
            <span>랩 {lapCount}</span>
            <span>{formatTime(lapTime)}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Laps;
