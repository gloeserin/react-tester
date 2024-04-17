import React, { useState } from 'react'
import { Button, Modal, Select } from 'flowbite-react';
import { data } from 'autoprefixer';
import axios from 'axios';


export default function ModalForm(openModal, setOpenModal) {
    const [namaKategori, setNamaKategori] = useState('')

    const submitKategori = async () => {
        try {
        console.log(namaKategori)
        await axios.post('http://localhost:5000/kategori', {
            namaKategori: namaKategori
        });
        setOpenModal(false)
        window.location.reload()
    } catch (error) { 
        console.log(error)
    }

    }

    return (
        <Modal show={openModal} onClose={() => { setOpenModal(false) }}>
            <Modal.Header className='shadow-md  '>Tambah Kategori</Modal.Header>
            <Modal.Body>
                <div class="col-span-2">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Nama Kategori</label>
                    <input type="text" name="name" id="name" onChange={(e) => setNamaKategori(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type category name" required="" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="bg-secondary px-6" onClick={() => {
                    submitKategori()
                }} >
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    )
}