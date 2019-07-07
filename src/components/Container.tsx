import * as React from 'react'

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children }) => <div>{children}</div>

export default Container
