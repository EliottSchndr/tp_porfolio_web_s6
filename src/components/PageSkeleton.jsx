function SkeletonBlock({ className }) {
    return <div className={`bg-gray-200 animate-pulse rounded-lg ${className}`} />;
}

function PageSkeleton() {
    return (
        <div className="min-h-screen bg-[var(--color-bg-gray)] overflow-hidden">
            {/* Navbar */}
            <div className="flex justify-between items-center py-6 px-10">
                <SkeletonBlock className="h-5 w-40" />
                <div className="flex gap-8">
                    <SkeletonBlock className="h-4 w-12" />
                    <SkeletonBlock className="h-4 w-16" />
                    <SkeletonBlock className="h-4 w-14" />
                </div>
            </div>

            {/* Hero */}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-20 gap-8">
                <div className="w-1/2 space-y-6">
                    <SkeletonBlock className="h-4 w-32" />
                    <SkeletonBlock className="h-16 w-3/4" />
                    <SkeletonBlock className="h-16 w-1/2" />
                    <SkeletonBlock className="h-4 w-full" />
                    <SkeletonBlock className="h-4 w-5/6" />
                    <div className="flex gap-4 pt-2">
                        <SkeletonBlock className="h-12 w-32" />
                        <SkeletonBlock className="h-12 w-32" />
                    </div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <SkeletonBlock className="h-96 w-80 rounded-2xl" />
                </div>
            </div>
        </div>
    );
}

export default PageSkeleton;
