import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { cn } from './utils';

const variants = {
  info: 'bg-blue-50 border-blue-200 text-blue-900',
  success: 'bg-green-50 border-green-200 text-green-900',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
  error: 'bg-red-50 border-red-200 text-red-900',
};

const icons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
};

const iconColors = {
  info: 'text-blue-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  error: 'text-red-600',
};

/**
 * Alert component for displaying messages with different severity levels
 */
export function Alert({
  children,
  variant = 'info',
  title,
  className = '',
  icon,
}) {
  return (
    <div
      className={cn(
        'flex gap-3 p-4 border rounded-lg',
        variants[variant],
        className
      )}
    >
      {icon !== false && (
        <div className="flex-shrink-0">
          {icon || (() => {
            const Icon = icons[variant];
            return <Icon className={cn('w-5 h-5', iconColors[variant])} />;
          })()}
        </div>
      )}
      <div className="flex-1">
        {title && (
          <h3 className="font-semibold mb-1">{title}</h3>
        )}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
