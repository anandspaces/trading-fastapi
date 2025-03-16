import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: Props) => (
  <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
)