import * as React from 'react'
import { Theme } from '@material-ui/core';
import { theme } from './jss'
interface IComponentContext {
    theme?: Theme
}

const ctx = React.createContext<IComponentContext | null>({ theme })

export const EvlContextProvider = ctx.Provider
export const EvlContextConsumer = ctx.Consumer