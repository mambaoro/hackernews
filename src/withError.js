import React from 'react';
import { Error } from './error';

export const withError = (Component) => ({ error, ...rest }) =>
  error
    ? <Error />
    : <Component {...rest} />
