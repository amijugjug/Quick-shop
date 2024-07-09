import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { ModalProvider } from './context/Modal.context';
import AppRouter from './router';

function App() {
  return (
    <ModalProvider>
      <AppRouter />
    </ModalProvider>
  );
}

export default App;
