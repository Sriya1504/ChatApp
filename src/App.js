
import { PrimeReactProvider } from 'primereact/api';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LoginBox from './components/Loginbox/Loginbox';

 
import 'primeicons/primeicons.css';
               
import './App.css';
import ChatRoom from './components/Chatroom/Chatroom';
import { UserProvider } from './components/Context/UserContext';
import { ChatProvider } from './components/Context/ChatContext';

  
const router = createBrowserRouter([
  {path:"/", element:<LoginBox/>},
  {path:'/Chatroom',element:<ChatRoom/>}
]);

function App() {
  const value = {
        ripple: true,
    };
  return (
    <UserProvider>
      <ChatProvider>
    <PrimeReactProvider value={value}>
        <RouterProvider router={router}>
        </RouterProvider>
    </PrimeReactProvider>
    </ChatProvider>
    </UserProvider>
  );
}

export default App;
