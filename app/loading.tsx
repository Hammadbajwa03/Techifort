export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[rgb(var(--background))]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-brand-600/20" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand-600" />
        </div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Loading Techifort…
        </p>
      </div>
    </div>
  );
}
