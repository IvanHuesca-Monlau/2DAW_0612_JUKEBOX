import { cn } from './utils';

/**
 * Toggle/Switch component for boolean values
 */
export function Toggle({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  id,
}) {
  const inputId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <label 
        htmlFor={inputId}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200',
          disabled ? 'opacity-50 cursor-not-allowed' : '',
          checked ? 'bg-blue-600' : 'bg-gray-300'
        )}
      >
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
        />
        <span
          className={cn(
            'inline-block w-4 h-4 bg-white rounded-full transition-transform duration-200',
            checked ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </label>
      {label && (
        <label 
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium text-gray-700',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
}
