import { ReactElement, JSXElementConstructor } from 'react'

export interface iRoute {
    path: string
    component: ReactElement<any, string | JSXElementConstructor<any>>
}
