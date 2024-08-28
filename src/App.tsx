import { Routes, Route } from 'react-router-dom'
import { LessonOne,LessonThree } from '@/pages'
function App() {
  return (
    <Routes>
      <Route path='/lesson-1' element={<LessonOne />}></Route>
      <Route path='/lesson-3' element={<LessonThree />}></Route>
      {/* <Route path='/lesson-2' element={<LessonOne />}></Route> */}
    </Routes>
  )
}

export default App
