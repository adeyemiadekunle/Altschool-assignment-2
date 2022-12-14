import React from 'react';
import { Outlet } from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Bomb({ username }) {
  if (username === 'bomb') {
    throw new Error('💥 CABOOM 💥');
  }
  return `Hi ${username}`;
}

function Home() {
  const [username, setUsername] = React.useState('');
  const usernameRef = React.useRef(null);
  return (
    <>
      <div className="home"> This is Home</div>
      <Outlet />
      <div>
        <label>
          {`Username (don't type "bomb"): `}
          <input
            placeholder={`type "bomb"`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
          />
        </label>
        <div>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              setUsername('');
              usernameRef.current.focus();
            }}
            resetKeys={[username]}
          >
            <Bomb username={username} />
          </ErrorBoundary>
        </div>
      </div>

    </>
  );
}
export default Home;
