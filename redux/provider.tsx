'use client'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import dynamic from 'next/dynamic'

import store from '@/redux/store'

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}

export default dynamic(() => Promise.resolve(Providers), { ssr: false })
