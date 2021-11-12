import React from 'react'
import { BaseIcon } from '../BaseIcon'

const DollarSign = ({ width = '2', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M12 1v22M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default DollarSign
