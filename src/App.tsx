import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import { RootContainer } from './components/ui/Layout';
import { ChatPage } from './pages';
import JoinPage from './pages/join';

function App() {
  return (
    <RootContainer>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </RootContainer>
  );
}

export default App;
