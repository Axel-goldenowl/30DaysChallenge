import { Routes, Route } from 'react-router-dom'

import { routes } from '@/routes'

import { IRoute } from '@/interfaces'

function App() {
  return (
    <Routes>
      {routes.map((route: IRoute) => (
        <Route key={route.path} {...route}></Route>
      ))}
    </Routes>
  )
}

export default App
