import * as React from 'react'

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children }) => <div>{children}</div>

export default Page
