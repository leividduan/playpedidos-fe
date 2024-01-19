import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthLayout } from '../view/layouts/AuthLayout';
import { MainLayout } from '../view/layouts/MainLayout';
import { Category } from '../view/pages/Category';
import { Dashboard } from '../view/pages/Dashboard';
import { Login } from '../view/pages/Login';
import { NotFound } from '../view/pages/NotFound';
import { Product } from '../view/pages/Product';
import { Register } from '../view/pages/Register';

import { AuthGuard } from './AuthGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/products" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
