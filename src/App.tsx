import { Route, Routes } from 'react-router-dom';
import { RootContainer } from './components/ui/Layout';
import { ChatPage } from './pages';
import JoinPage from './pages/join';
import LoginPage from './pages/login';

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
