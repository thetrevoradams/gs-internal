import React from 'react'
import { BaseIcon } from '../BaseIcon'

const LogOut = ({ width = '1.5', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default LogOut
