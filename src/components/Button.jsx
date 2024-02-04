import { forwardRef } from 'react';

const Button = forwardRef(({ label, code, color, onClickHandler }, ref) => {
  return (
    <button
      ref={ref}
      className={`relative flex flex-col items-center justify-center w-16 h-16 ${color} rounded-full shadow-md cursor-pointer`}
      onClick={onClickHandler}
    >
      <p id="lap-reset-btn-label" className="text-base">
        {label}
      </p>
      <p className="text-xs">{code}</p>
    </button>
  );
});

export default Button;
