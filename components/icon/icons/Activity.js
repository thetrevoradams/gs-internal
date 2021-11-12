import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Mail = ({ width = '2', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M22 12h-4l-3 9L9 3l-3 9H2"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Mail
