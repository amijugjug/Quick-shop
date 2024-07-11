import { ModalProvider } from './context/Modal.context';
import { ToastProvider } from './context/Toast.context';
import { UserProvider } from './context/User.context';
import { useDetectDevice } from './hooks/useDetectDevice.hook';
import AppRouter from './router';

function App() {
  const { deviceType } = useDetectDevice();
  const isMobile = deviceType === 'mobile';
  if (isMobile) {
    return <div>Website is not accessible via phone</div>;
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
