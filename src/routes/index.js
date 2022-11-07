import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import MyRoute from './MyRoute';

import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Produtos from '../pages/Produtos';
import Masculina from '../pages/Masculina';
import Feminina from '../pages/Feminina';
import LoginLoja from '../pages/LoginLoja';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path={'/'} element={<Produtos />} isClosed={false} />
            <Route
                path={'/masculina'}
                element={<Masculina />}
                isClosed={false}
            />
            <Route path={'/feminina'} element={<Feminina />} isClosed={false} />
            <Route
                path={'/register/'}
                element={<Register />}
                isClosed={false}
            />
            <Route
                path={'/register-loja'}
                element={<Register />}
                isClosed={false}
            />
            <Route path={'/login/'} element={<Login />} isClosed={false} />
            <Route
                path={'/login-loja/'}
                element={<LoginLoja />}
                isClosed={false}
            />
            <Route path={'*'} element={<Page404 />} />
        </Routes>
    );
}
