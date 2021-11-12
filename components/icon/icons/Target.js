import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Target = ({ width = '2', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M12.5 22.917c5.753 0 10.417-4.664 10.417-10.417S18.253 2.083 12.5 2.083 2.083 6.747 2.083 12.5 6.747 22.917 12.5 22.917Z"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 18.75a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5Z"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 14.583a2.083 2.083 0 1 0 0-4.166 2.083 2.083 0 0 0 0 4.166Z"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Target
