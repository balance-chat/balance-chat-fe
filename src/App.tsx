import { Route, Routes } from 'react-router-dom';
import RootContainer from './components/layout/RootContainer';
import LoginPage from './pages/login';
import JoinPage from './pages/join';
import ChatPage from './pages/chat';

function App() {
  return (
    <RootContainer>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </RootContainer>
  );
}

export default App;
