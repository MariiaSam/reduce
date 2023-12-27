import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import  '../store/store'

const TodoPage = lazy(() => import('../pages/TodoPage'))

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Suspense fallback={<>loading</> }>
     
      <Routes>
      <Route path='todo' element={<TodoPage />} />


      </Routes>
       </Suspense>
     Redux
    </div>
  );
};
