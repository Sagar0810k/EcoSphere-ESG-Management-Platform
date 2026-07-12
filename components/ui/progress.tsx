interface ProgressBarProps {
  value: number
  max?: number
  className?: string
}

export function ProgressBar({ value, max = 100, className = '' }: ProgressBarProps) {
  const percentage = (value / max) * 100
  return (
    <div className={`w-full bg-slate-200 rounded-full h-2 ${className}`}>
      <div
        className="bg-green-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
