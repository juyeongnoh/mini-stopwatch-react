import formatTime from '../util/formatTime';

const Laps = ({ laps }) => {
  return (
    <article className="h-64 overflow-auto text-gray-600 border-t-2">
      <ul>
        {laps.map((lap) => (
          <li
            key={lap[0]}
            className="flex justify-between px-3 py-2 border-b-2"
          >
            <span>랩 {lap[0]}</span>
            <span>{formatTime(lap[1])}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Laps;
