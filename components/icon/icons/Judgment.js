import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Judgment = ({ width = '1.5', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M5.635 13.403H8.14m2.506 0H8.14m0 0V1.623m-5.216 2.17c4.163-1.767 6.442-1.28 10.492 0M4.733 7.513c-1.537.66-2.353.649-3.733 0M15 7.513c-1.538.66-2.354.649-3.733 0"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
    />
    <path
      d="m1.466 7.022 1.47-2.454 1.33 2.454M11.733 7.022l1.47-2.454 1.33 2.454"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </BaseIcon>
)

export default Judgment
