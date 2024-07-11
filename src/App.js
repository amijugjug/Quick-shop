import { ModalProvider } from './context/Modal.context';
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
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
