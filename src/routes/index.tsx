import { LessonOne, LessonThree, LessonFour, LessonEight } from '@/pages'

export const routes = [
    {
        path: "/lesson-1",
        component: <LessonOne/>
    },
    {
        path: "/lesson-3",
        component: <LessonThree/>
    },
    {
        path: "/lesson-4",
        component: <LessonFour/>
    },
    {
        path: "/lesson-8",
        component: <LessonEight/>
    }
]