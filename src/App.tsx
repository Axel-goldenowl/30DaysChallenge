import { Routes, Route } from 'react-router-dom'

import { LessonOne, LessonThree, LessonFour } from '@/pages'

function App() {
  return (
    <Routes>
      <Route path='/lesson-1' element={<LessonOne />}></Route>
      <Route path='/lesson-3' element={<LessonThree />}></Route>
      <Route path='/lesson-4' element={<LessonFour />}></Route>
    </Routes>
  )
}

export default App
