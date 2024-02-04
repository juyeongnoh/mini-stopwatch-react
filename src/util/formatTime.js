const formatTime = (centisecond) => {
  let formattedString = '';
  const min = parseInt(centisecond / 6000);
  const sec = parseInt((centisecond - 6000 * min) / 100);
  const centisec = centisecond % 100;

  formattedString = `${String(min).padStart(2, 0)}:${String(sec).padStart(
    2,
    0
  )}.${String(centisec).padStart(2, 0)}`;

  return formattedString;
};

export default formatTime;
