import * as React from 'react'

interface LayoutMainProps {}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => (
  <main>{children}</main>
)

export default LayoutMain
