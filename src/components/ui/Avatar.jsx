import { cn } from './utils';

const sizes = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-lg',
};

/**
 * Avatar component for user profiles
 */
export function Avatar({
  src,
  alt = 'User avatar',
  fallback,
  size = 'md',
  className = '',
}) {
  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden',
        sizes[size],
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-medium text-gray-600">
          {fallback || alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}
