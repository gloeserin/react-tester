import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Admin from './dashboard/AdminDashboard.jsx';
import DataKategori from './pages/admin/DataKategori.jsx';
import DataPetugas from './pages/admin/DataPetugas.jsx';
import EditPetugas from './pages/admin/EditPetugas.jsx';
import TambahPetugas from './pages/admin/TambahPetugas.jsx';
import DataBuku from './pages/admin/DataBuku.jsx';
import TambahBuku from './pages/admin/TambahBuku.jsx';
import DataPeminjam from './pages/admin/DataPeminjam.jsx';
import DashboardPetugas from './dashboard/PetugasDashboard..jsx';
import DataBukuPetugas from './pages/petugas/DataBuku.jsx';
import DataPeminjamPetugas from './pages/petugas/DataPeminjam.jsx';
import Borrowed from './pages/peminjam/Borrowed.jsx';
import SemuaBuku from './pages/peminjam/SemuaBuku.jsx';
import Ulasan from './pages/peminjam/Ulasan.jsx';
import DashboardPeminjam from './dashboard/PeminjamDashboard.jsx';
import EditBuku from './pages/admin/EditBuku.jsx';

const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/admin/dashboard",
      element: <Admin />
    },
    {
      path: "/admin/dashboard/dataKategori",
      element: <DataKategori />
    },
    {
      path: '/admin/dashboard/dataPetugas',
      element: <DataPetugas />
    },
    {
      path: '/admin/dashboard/editPetugas',
      element: <EditPetugas />
    },
    {
      path: '/admin/dashboard/tambahPetugas',
      element: <TambahPetugas />
    },
    {
      path: '/admin/dashboard/dataBuku',
      element: <DataBuku />
    },
    {
      path: '/admin/dashboard/tambahBuku',
      element: <TambahBuku />
    },
    {
      path: '/admin/dashboard/editBuku',
      element: <EditBuku />
    },
    {
      path: '/admin/dashboard/dataPeminjam',
      element: <DataPeminjam />
    },
    {
      path: "/petugas/dashboard",
      element: <DashboardPetugas />
    },
    {
      path: "/petugas/dashboard/dataBuku",
      element: <DataBukuPetugas />
    },
    {
      path: "/petugas/dashboard/dataPeminjam",
      element: <DataPeminjamPetugas />
    },
    {
      path: "/peminjam/dashboard",
      element: <DashboardPeminjam />
    },
    {
      path: "/peminjam/dashboard/borrowed",
      element: <Borrowed  />
    },
    {
      path: "/peminjam/dashboard/dataBuku",
      element: <SemuaBuku />
    },
    {
      path: "/peminjam/dashboard/ulasan/:id",
      element: <Ulasan />
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
