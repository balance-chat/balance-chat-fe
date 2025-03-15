import { Route, Routes } from 'react-router-dom';
import { RootContainer } from './components/layout/RootContainer/RootContainer';
import { ChatPage, JoinPage, LoginPage } from './pages';

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
