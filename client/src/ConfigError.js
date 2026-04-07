import React from 'react';

const PLACEHOLDERS = new Set([
  '',
  'YOUR_DESCOPE_PROJECT_ID',
  '__ProjectID__',
  'your-project-id',
]);

export function isValidDescopeProjectId(value) {
  if (typeof value !== 'string') return false;
  const id = value.trim();
  if (!id) return false;
  if (PLACEHOLDERS.has(id)) return false;
  return true;
}

export default function ConfigError() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        maxWidth: 520,
        margin: '48px auto',
        padding: 24,
        lineHeight: 1.5,
      }}
    >
      <h1 style={{ fontSize: '1.25rem' }}>Descope configuration required</h1>
      <p>
        Add your project ID to <code style={{ background: '#eee', padding: '2px 6px' }}>client/.env</code>:
      </p>
      <pre
        style={{
          background: '#f4f4f4',
          padding: 12,
          borderRadius: 8,
          overflow: 'auto',
        }}
      >
        REACT_APP_PROJECT_ID=P2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </pre>
      <p>
        Use the same value as in the Descope console (Settings → Project). Then stop and restart{' '}
        <code style={{ background: '#eee', padding: '2px 6px' }}>npm start</code> — Create React App only reads{' '}
        <code style={{ background: '#eee', padding: '2px 6px' }}>.env</code> at startup.
      </p>
    </div>
  );
}
