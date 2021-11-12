import React from 'react'
import { BaseIcon } from '../BaseIcon'

const Search = ({ width = '1.5', ...props }) => (
  <BaseIcon {...props}>
    <path
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
)

export default Search
