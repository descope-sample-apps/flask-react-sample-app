// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { AuthProvider } from '@descope/react-sdk'


function App() {
  return (
    <AuthProvider projectId={process.env.REACT_APP_PROJECT_ID}>
      <Login />
    </AuthProvider>
  );
}

export default App;