import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import loginLogo from '../assets/images/login.jpeg'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alamat, setAlamat] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/register", {
                name: name,
                username: username,
                email: email,
                password: password,
                alamat: alamat
            });
            navigate('/login');
        } catch (error) {
            console.error('Register failed', error);
        }
    }

    return (
        <section className="bg-gray-50 h-screen max-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-2xl max-w-2xl p-5">
                <div className='sm:w-1/2 px-6 mt-8'>
                    <h2 className='font-bold text-2xl'>Register</h2>
                    <p className="text-sm mt-4">
                        Welcome to Libranet, a place to lorem ipsum dolar sit amet.
                    </p>
                    <form onSubmit={register} className='flex flex-col gap-4'>

                        <input className='p-2 mt-8 rounded-xl border' type="text" name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input className='p-2 rounded-xl border' type="text" name='username' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input className='p-2 rounded-xl border' type="text" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className='p-2 rounded-xl border' type="text" name='alamat' placeholder='Alamat' value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                        <div className='relative'>
                            <input className='p-2 rounded-xl border w-full' type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='bg-[#002074] rounded-xl text-white py-2'>Register</button>
                    </form>

                    <div className="mt-3 text-xs flex justify-between items-center py-6">
                        <p>If you already have an account</p>
                        <a href='/login' className='py-2 px-5 bg-white border rounded-xl'>Login</a>
                    </div>
                </div>
                <div className='w-1/2 sm:block hidden mt-4'>
                    <img src={loginLogo} alt="" className=' rounded-2xl' />
                </div>
            </div>
        </section>
    )
}



