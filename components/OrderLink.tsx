import type { ReactNode } from 'react'
import { TELEGRAM_ORDER_URL } from '../site-config'

type OrderLinkProps = {
  children?: ReactNode
  className?: string
}

export default function OrderLink({ children = 'ORDER HERE', className }: OrderLinkProps) {
  return (
    <a
      className={className}
      href={TELEGRAM_ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
