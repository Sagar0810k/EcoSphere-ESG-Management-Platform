import { LabelHTMLAttributes } from 'react'

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={`block text-sm font-medium text-slate-700 mb-2 ${props.className || ''}`}
    />
  )
}
