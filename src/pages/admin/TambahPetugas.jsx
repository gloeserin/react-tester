import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { FaRegEdit } from "react-icons/fa";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import AdminLayout from '../../layout/AdminLayout';



export default function TambahPetugas() {

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [alamat, setAlamat] = useState('');
  const navigate = useNavigate();

  // const createPetugas = async (e) => {
  //   e.preventDefault();

  //   await axios.post("http://localhost:5000/create/petugas", {
  //     name: name,
  //     email: email,
  //     password: password, 
  //     alamat: alamat,
  //   }) 
  //   navigate('/admin/dashboard/dataPetugas');
  // }

  return (
    <AdminLayout>
     <Breadcrumb pageName="Tambah Petugas" />
     <div className="rounded-sm border flex flex-col border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark shadow-lg p-4">    
      <form className=" grid grid-cols-2 gap-4 grow py-8  ">
        <div>
          <div className='mb-4'>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Nama Petugas" />
            </div>
            <TextInput id="name" type="text" placeholder="Masukkan nama petugas" required  />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email Petugas" />
            </div>
            <TextInput id="email" type="email" placeholder='Masukkan email petugas' required  />
          </div>
        </div>
        <div>
          <div className='mb-4'>
            <div className="mb-2 block">
              <Label htmlFor="text" value="Password Petugas" />
            </div>
            <TextInput id="text" type="text" placeholder="Masukkan password petugas" required  />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="alamat" value="Alamat Petugas" />
            </div>
            <TextInput id="alamat" type="text" placeholder='Masukkan alamat petugas' required  />
          </div>

        </div>
        <div className='py-6'>
          <Button className='bg-secondary px-8' type="submit">Submit</Button>

        </div>
      </form>
    </div>
    </AdminLayout>
  )
}
