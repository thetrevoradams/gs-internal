import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Records = ({ width = '2', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M25 8.75H5a2.5 2.5 0 0 0-2.5 2.5v12.5a2.5 2.5 0 0 0 2.5 2.5h20a2.5 2.5 0 0 0 2.5-2.5v-12.5a2.5 2.5 0 0 0-2.5-2.5Z"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
    />
    <path
      d="M20 26.25v-20a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5v20"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Records
