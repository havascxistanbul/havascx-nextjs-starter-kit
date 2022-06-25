import React from 'react';
import clsx from 'clsx';

export interface HelloWorldProps {
  text: string;
}

function HelloWorld({ text }: HelloWorldProps): JSX.Element {
  return <p className={clsx('w-32 bg-blue-500 p-2 text-white')}>{text}</p>;
}

export default HelloWorld;
