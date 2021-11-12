import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Reports = ({ width = '2', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M26.512 19.863A12.5 12.5 0 1 1 10 3.537"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 15A12.5 12.5 0 0 0 15 2.5V15h12.5Z"
      stroke="#1B87FA"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Reports
