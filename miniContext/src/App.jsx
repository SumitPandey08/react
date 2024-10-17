import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider >
      <h1>Hello I Am Zoro ! Welcome To Our Website</h1>
      <br />
   <div className='bg-black '>
      <Login />
      <br />
 </div>
      <Profile />
    </UserContextProvider>
  );
}

export default App;
