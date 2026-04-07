import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from '@descope/react-sdk';
import ConfigError, { isValidDescopeProjectId } from './ConfigError';

const projectId = process.env.REACT_APP_PROJECT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));

if (!isValidDescopeProjectId(projectId)) {
  root.render(
    <React.StrictMode>
      <ConfigError />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <AuthProvider projectId={projectId.trim()}>
        <App />
      </AuthProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
