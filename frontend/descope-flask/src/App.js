// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { AuthProvider } from '@descope/react-sdk'


function App() {
  return (
    <AuthProvider projectId="P2Pq03wpnnjxJajSUKDuy2xviLNV">
      <Login />
    </AuthProvider>
  );
}

export default App;
