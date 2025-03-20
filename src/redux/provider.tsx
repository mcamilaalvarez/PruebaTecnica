'use client';

import {  ReactNode, useRef } from 'react';
import { makeStore, } from './store';
import { Provider } from 'react-redux';

export default function ReduxProvider({ children }: { children: ReactNode }) {

  const storeRef = useRef(makeStore()); 

 return( <Provider store={storeRef.current}> {children} </Provider> );
}