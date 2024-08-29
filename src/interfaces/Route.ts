import { ReactElement, JSXElementConstructor } from 'react'

export interface IRoute {
    path: string
    component: ReactElement<any, string | JSXElementConstructor<any>>
}
