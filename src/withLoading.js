import React from 'react';
import { Loading } from './loading';

export const withLoading = (Component) => ({ isLoading, error, ...rest }) =>
  !error
    ? isLoading
        ? <Loading>
            Loading...
          </Loading>
        : <Component {...rest} />
    : null
