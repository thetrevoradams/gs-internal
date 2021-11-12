import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Mail = ({ width = '2', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Mail
