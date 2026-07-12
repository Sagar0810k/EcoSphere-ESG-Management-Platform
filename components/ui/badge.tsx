interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'info'
}

export function Badge({ variant = 'default', className = '', ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-slate-100 text-slate-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    destructive: 'bg-red-100 text-red-800',
    info: 'bg-indigo-100 text-indigo-800',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
