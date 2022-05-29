import React from 'react';
type OscarProps = {
  children: React.ReactNode;
};
export const Oscar = (prop: OscarProps) => {
  return <div>{prop.children}</div>;
};
