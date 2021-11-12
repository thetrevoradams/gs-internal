import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Dashboard = ({ width = '2', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M12.5 3.75H3.75v8.75h8.75V3.75ZM26.25 3.75H17.5v8.75h8.75V3.75ZM26.25 17.5H17.5v8.75h8.75V17.5ZM12.5 17.5H3.75v8.75h8.75V17.5Z"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Dashboard
