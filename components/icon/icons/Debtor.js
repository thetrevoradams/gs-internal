import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Debtor = ({ width = '1.5', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M10 12v-1c0-.53-.237-1.04-.659-1.414A2.4 2.4 0 0 0 7.75 9h-4.5a2.4 2.4 0 0 0-1.591.586A1.894 1.894 0 0 0 1 11v1M5.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Debtor
