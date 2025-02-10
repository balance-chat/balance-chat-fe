import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import { RootContainer } from './components/ui/Layout';

function App() {
  return (
    <RootContainer>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </RootContainer>
  );
}

export default App;
