'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../_store'
import NavbarComponent from './navbarcomponent/NavbarComponent'

type Props = {
    children:React.ReactNode
}

export default function StoreProvider({children}: Props) {
  return (
    <Provider store={store} >
        <main className="w-full min-h-screen bg-gray-100 text-gray-900" >
            <NavbarComponent />
            {children}
        </main>
    </Provider>
  )
}