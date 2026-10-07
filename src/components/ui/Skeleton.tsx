export function SkeletonLine({ className = '' }: { className?: string }) {
  return (
    <div className={`h-4 bg-gray-200 rounded animate-pulse ${className}`} />
  );
}

export function SkeletonCircle({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-gray-200 rounded-full animate-pulse ${className}`} />
  );
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`p-6 rounded-[20px] border border-gray-100 bg-white ${className}`}>
      <SkeletonCircle className="w-12 h-12 mb-4" />
      <SkeletonLine className="w-1/3 mb-2" />
      <SkeletonLine className="w-full mb-2" />
      <SkeletonLine className="w-2/3" />
    </div>
  );
}

export function SkeletonProductCard({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-[20px] border border-gray-100 bg-white overflow-hidden ${className}`}>
      <div className="w-full aspect-square bg-gray-200 animate-pulse" />
      <div className="p-4">
        <SkeletonLine className="w-3/4 mb-2" />
        <SkeletonLine className="w-1/4 h-5" />
      </div>
    </div>
  );
}

export default {
  Line: SkeletonLine,
  Circle: SkeletonCircle,
  Card: SkeletonCard,
  ProductCard: SkeletonProductCard,
};
