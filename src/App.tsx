
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'

function App() {

  return (
    <>
    <div className='bg-slate-950 text-white h-screen w-screen'>
    <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
