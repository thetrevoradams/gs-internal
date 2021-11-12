import { FC } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg'
type BaseIconProps = Partial<{
  role: string
  'aria-label': string
  size: Size
  color: string
  fill: string
  toggle: boolean | null | undefined
  className: string
  background: string | null | undefined
}>

const sizes = {
  xs: 18,
  sm: 24,
  md: 30,
  lg: 48,
}

export const BaseIcon: FC<BaseIconProps> = ({ color, size = 'sm', fill = 'none', className, children }) => (
  <svg style={{ color }} width={sizes[size]} height={sizes[size]} fill={fill} className={className}>
    {children}
  </svg>
)
