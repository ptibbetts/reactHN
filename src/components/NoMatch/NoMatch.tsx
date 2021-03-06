import React from 'react';

interface INoMatchProps {
  location: {
    pathname: string
  }
}

export const NoMatch = ({ location }: INoMatchProps) => (
  <h1 className="font-bold text-gray-700 dark:text-white text-2xl">Nothing was found for "{location.pathname}".</h1>
);