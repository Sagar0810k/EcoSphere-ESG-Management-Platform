interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div 
      className={`rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`border-b border-slate-100 px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', ...props }: CardProps) {
  return (
    <h2 className={`text-xl font-semibold text-slate-900 ${className}`} {...props}>
      {children}
    </h2>
  )
}

export function CardContent({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`flex items-center justify-between border-t border-slate-100 px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
