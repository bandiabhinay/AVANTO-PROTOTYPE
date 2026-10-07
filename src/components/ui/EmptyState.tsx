import type { LucideIcon } from 'lucide-react';
import Button from './Button';

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center rounded-[20px] bg-white border border-gray-100 border-dashed ${className}`}>
      <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shadow-sm">
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-[#172033] mb-2">{title}</h3>
      <p className="text-[#667085] max-w-sm mb-6">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
