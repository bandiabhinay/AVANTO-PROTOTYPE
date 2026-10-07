import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className = '', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-[#172033]">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 text-[#667085] flex items-center justify-center">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full h-10 px-3 rounded-[10px] border bg-white text-[#172033] placeholder:text-[#667085] transition-shadow focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 ${
              error ? 'border-[#F04438] focus:border-[#F04438] focus:ring-[#F04438]/20' : 'border-[#D0D5DD]'
            } ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 text-[#667085] flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p className={`text-xs ${error ? 'text-[#F04438]' : 'text-[#667085]'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-[#172033]">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full p-3 rounded-[10px] border bg-white text-[#172033] placeholder:text-[#667085] transition-shadow focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 resize-y min-h-[80px] ${
            error ? 'border-[#F04438] focus:border-[#F04438] focus:ring-[#F04438]/20' : 'border-[#D0D5DD]'
          } ${className}`}
          {...props}
        />
        {(error || helperText) && (
          <p className={`text-xs ${error ? 'text-[#F04438]' : 'text-[#667085]'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);
TextArea.displayName = 'TextArea';

export default Input;
