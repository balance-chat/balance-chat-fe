import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Join from './components/join/Join';
import { RootContainer } from './components/ui/Layout';
import { ChatPage } from './pages';

function App() {
  return (
    <RootContainer>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </RootContainer>
  );
}

export default App;
