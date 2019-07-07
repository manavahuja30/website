import React, { PropsWithChildren, ReactElement } from 'react';

const Page = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <div>{children}</div>
);

export default Page;
