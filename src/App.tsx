import { Routes, Route } from 'react-router-dom'

import { routes } from '@/routes'

import { iRoute } from '@/interfaces'

function App() {
  return (
    <Routes>
      {routes.map((route: iRoute) => {
        return <Route key={route.path} path={route.path} element={route.component}></Route>
      })}
    </Routes>
  )
}

export default App
