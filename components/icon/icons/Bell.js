import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Bell = ({ width = '1.5', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a1.999 1.999 0 0 1-3.46 0"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Bell
