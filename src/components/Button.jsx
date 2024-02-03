const Button = ({ label, code, color }) => {
  return (
    <button
      className={`relative flex flex-col items-center justify-center w-16 h-16 bg-${color}-600 rounded-full shadow-md cursor-pointer`}
    >
      <p id="lap-reset-btn-label" className="text-base">
        {label}
      </p>
      <p className="text-xs">{code}</p>
    </button>
  );
};

export default Button;
