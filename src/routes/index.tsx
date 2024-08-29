import { LessonOne, LessonThree, LessonFour, LessonEight, LessonTen, LessonFifteen } from '@/pages'

export const routes = [
  {
    path: '/lesson-1',
    element: <LessonOne />
  },
  {
    path: '/lesson-3',
    element: <LessonThree />
  },
  {
    path: '/lesson-4',
    element: <LessonFour />
  },
  {
    path: '/lesson-8',
    element: <LessonEight />
  },
  {
    path: '/lesson-10',
    element: <LessonTen />
  },
  {
    path: '/lesson-15',
    element: <LessonFifteen />
  }
]
