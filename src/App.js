
import { PrimeReactProvider } from 'primereact/api';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LoginBox from './components/Loginbox/Loginbox';
import RegisterBox from './components/Registerbox/Registerbox';

import 'primeicons/primeicons.css';
        
import './App.css';
import ChatRoom from './components/Chatroom/Chatroom';

  
const router = createBrowserRouter([
  {path:"/", element:<LoginBox/>},
  {path:'/SignUp', element:<RegisterBox/>},
  {path:'/Chatroom',element:<ChatRoom/>}
]);

function App() {
  const value = {
        ripple: true,
    };
  return (
    <PrimeReactProvider value={value}>
        <RouterProvider router={router}></RouterProvider>
    </PrimeReactProvider>
  );
}

export default App;
