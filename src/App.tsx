
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'

import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (

    <Provider store={store}>

      <div className='bg-slate-950 text-white h-screen w-screen'>
        <RouterProvider router={router} />
      </div>
    </Provider>

  )
}

export default App
