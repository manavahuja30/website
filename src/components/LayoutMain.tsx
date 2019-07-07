import React, { PropsWithChildren, ReactElement } from 'react';

const LayoutMain = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <main>{children}</main>
);

export default LayoutMain;
