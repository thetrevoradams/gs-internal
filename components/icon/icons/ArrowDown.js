import React from 'react'
import { BaseIcon } from '../BaseIcon'

const ArrowDown = ({ width = '1.5', ...props }) => (
  <BaseIcon {...props}>
    <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
  </BaseIcon>
)

export default ArrowDown
