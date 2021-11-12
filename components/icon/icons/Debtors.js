import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Debtors = ({ width = '2', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M21.25 26.25v-2.5a5 5 0 0 0-5-5h-10a5 5 0 0 0-5 5v2.5M11.25 13.75a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM28.75 26.25v-2.5A5 5 0 0 0 25 18.913M20 3.913a5 5 0 0 1 0 9.687"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Debtors
