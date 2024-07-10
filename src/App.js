import { ModalProvider } from './context/Modal.context';
import { useDetectDevice } from './hooks/useDetectDevice.hook';
import AppRouter from './router';

function App() {
  const { deviceType, width } = useDetectDevice();
  const isMobile = deviceType === 'mobile';
  if (isMobile) {
    return <div>Website is not accessible via phone</div>;
  }
  return (
    <ModalProvider>
      <AppRouter />
    </ModalProvider>
  );
}

export default App;
