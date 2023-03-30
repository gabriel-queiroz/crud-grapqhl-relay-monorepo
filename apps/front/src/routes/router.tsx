import React from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { Userslist } from '../pages/Users/UsersList'
import { UsersForm } from '../pages/Users/UsersForm'
export const router = createBrowserRouter([
  {
    path: 'users',
    element: <Outlet />,
    children: [
      {
        path: 'new',
        element: <UsersForm />
      },
      {
        path: ':id',
        element: <UsersForm />
      },
      {
        path: '',
        element: <Userslist />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="users" />
  }
])
