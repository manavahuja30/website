import React, { PropsWithChildren, ReactElement } from 'react';

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
}: PropsWithChildren<{}>): ReactElement => <div>{children}</div>;

export default Container;
