import { Routes, Route } from 'react-router-dom'

import { routes } from '@/routes'

function App() {
  return (
    <Routes>
      {routes.map((route) => {
        let Page = route.component
        return <Route key={route.path} path={route.path} element={<Page />}></Route>
      })}
    </Routes>
  )
}

export default App
