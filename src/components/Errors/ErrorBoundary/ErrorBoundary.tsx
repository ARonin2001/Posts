import React from 'react';
import { NavLink, isRouteErrorResponse, useRouteError } from 'react-router-dom';

import style from './ErrorBoundary.module.scss';

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) return null;

  return (
    <div className={style.Error}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.errorMsg}>
            <h1 className={style.title}>{error.status}</h1>
            <span className={style.statusText}>{error.statusText}</span>
          </div>
          <p className={style.data}>{error.data}</p>
          <NavLink to="/" className={style.link}>
            To main page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
