import React from 'react';
import clsx from 'clsx'; // Optional: Recommended for clean Tailwind merging
import { twMerge } from 'tailwind-merge'; // Optional: Prevents Tailwind class conflicts

const Button = ({ 
  label, 
  iconURL, 
  backgroundColor, 
  borderColor, 
  textColor, 
  fullWidth = false, 
  type = "button", 
  disabled = false, 
  isLoading = false, // New feature
  ariaLabel,         // New feature
  onClick 
}) => {
  
  // Base structural styles
  const baseStyles = "flex items-center justify-center gap-2 px-7 py-4 rounded-full font-montserrat text-lg leading-none border transition-all duration-300 transform-gpu";
  
  // Dynamic layout & state styles
  const layoutStyles = fullWidth ? "w-full" : "w-fit";
  const stateStyles = "hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-red focus-visible:ring-offset-2";
  
  // Color configuration logic
  const colorStyles = backgroundColor 
    ? `${backgroundColor} ${borderColor} ${textColor}` 
    : "bg-coral-red text-white border-coral-red";

  // Safely combine all Tailwind classes
  const combinedClasses = typeof twMerge !== 'undefined' 
    ? twMerge(baseStyles, layoutStyles, stateStyles, colorStyles)
    : `${baseStyles} ${layoutStyles} ${stateStyles} ${colorStyles}`;

  const isInteractionDisabled = disabled || isLoading;

  return (
    <button 
      type={type} 
      disabled={isInteractionDisabled} 
      onClick={onClick} 
      aria-label={ariaLabel || label}
      aria-busy={isLoading}
      className={combinedClasses}
    >
      {isLoading && (
        <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      
      <span>{label}</span>
      
      {iconURL && !isLoading && (
        <img 
          src={iconURL} 
          alt="" // Decorative icon rule
          aria-hidden="true" 
          className="w-5 h-5 object-contain" 
        />
      )}
    </button>
  );
};

export default Button;
