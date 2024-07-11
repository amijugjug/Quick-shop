import { ModalProvider } from './context/Modal.context';
import { ToastProvider } from './context/Toast.context';
import { UserProvider } from './context/User.context';
import useDetectDevice from './hooks/useDetectDevice.hook';
import AppRouter from './router';

import MobileWarning from './components/MobileWarning';
function App() {
  const deviceType = useDetectDevice();
  const isMobile = deviceType === 'mobile';
  if (isMobile) {
    return <MobileWarning />;
  }
  return (
    <UserProvider>
      <ToastProvider>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </ToastProvider>
    </UserProvider>
  );
}

export default App;
