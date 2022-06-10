import './App.css';
import Login from './components/Login';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {
  const [user] = useAuthState(auth)
  return (
    <> 
      { user ? <Chat /> : <Login />}
    </>
  );
}

export default App;
