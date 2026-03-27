const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth = false,
  type = "button",
  disabled = false,
  onClick
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        px-7 py-4 rounded-full
        font-montserrat text-lg leading-none
        border transition-all duration-300
        
        ${
          backgroundColor
            ? `${backgroundColor} ${borderColor} ${textColor}`
            : "bg-coral-red text-white border-coral-red"
        }

        ${fullWidth ? "w-full" : "w-fit"}
        
        hover:scale-105 hover:shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="button icon"
          className="w-5 h-5 object-contain"
        />
      )}
    </button>
  );
};

export default Button;
