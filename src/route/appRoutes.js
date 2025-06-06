import React from 'react'
import { Navigate } from 'react-router'
import { createHashRouter } from 'react-router-dom'

import { Popup } from '../layout/popup/Popup'
import { Settings } from '../layout/settings/Settings'
import { Blocked } from '../layout/blocked/Blocked'

export const appRoutes = createHashRouter([
    {
        path: "/",
        element: <Navigate to="/popup" replace />
    },
    {
        path: "/popup",
        element: <Popup/>
    },
    {
        path: "/settings",
        element: <Settings/>
    },
    {
        path: "/blocked",
        element: <Blocked/>
    }
])
