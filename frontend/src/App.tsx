import { Link } from 'react-router'
import './index.css'
function App() {
  return (
    <>
    <h1 className="text-6xl font-black mb-5">Hola Mundirijillo</h1>
    <Link to='/auth/login' className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2'>Iniciar Sesión</Link>
    <Link to='/auth/register' className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2'>Registrarse</Link>
    </>
  )
}

export default App
