import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Loginpage from './components/login/loginpage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Loginpage />
  )
}

export default App
