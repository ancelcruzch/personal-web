import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {AdminLayout} from '../layouts';
import {Auth, Users, Blog, Courses, Menu, Newsletter} from '../pages/admin'

const user = {email: "alaincruz@example.com"};

export function AdminRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page/>
      </Layout>
    );
  };

  return (
    <Routes>
      {!user ? (
        // Ruta protegida: Si el usuario no está autenticado, muestra la página de autenticación
        <Route path="/admin/*" element={loadLayout(AdminLayout, Auth)} />
      ) : (
        <>
          {["/admin", "/admin/blog"].map((path) => (
            <Route
              key={path}
              path={path}  
              element={loadLayout(AdminLayout,Blog)}
            />
          ))}
          {/* Ruta de usuarios accesible solo para usuarios autenticados */}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} /> 
          <Route path="/admin/courses" element={loadLayout(AdminLayout, Courses)} />   
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />   
          <Route path="/admin/newsletter" element={loadLayout(AdminLayout, Newsletter)} />        
        </>
      )}
    </Routes>
  );
}
