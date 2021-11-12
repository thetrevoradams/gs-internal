import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Tasks = ({ width = '2', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M27.5 15H20l-2.5 3.75h-5L10 15H2.5"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.813 6.388 2.5 15v7.5A2.5 2.5 0 0 0 5 25h20a2.5 2.5 0 0 0 2.5-2.5V15l-4.313-8.613A2.5 2.5 0 0 0 20.95 5H9.05a2.5 2.5 0 0 0-2.238 1.388v0Z"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Tasks
