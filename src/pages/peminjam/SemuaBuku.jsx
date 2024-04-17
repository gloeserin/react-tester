import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Carousel } from 'flowbite-react';
import { Card, Button } from 'flowbite-react';
import ModalContent from '../../components/ModalContent.jsx';
import axios from "axios";
import { Link } from 'react-router-dom';
import Books from '../../components/Books.jsx';
import LayoutPeminjam from '../../layout/LayoutPeminjam.jsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';



export default function SemuaBuku() {
    const [openModal, setOpenModal] = useState(false)
    const [setModalData] = useState({});
    const [data, setData] = useState({});

    const [books, setBooks] = useState([]);
    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/books/get',{
                    withCredentials: true,
                }).then((res) => {
                    setBooks(res.data);
                    return res.data
                }
                );
                console.log(response)
                return response;

            } catch (error) {
            }
        };
        getBooks()
    }, []);

    const onClose = () => {
        setOpenModal(false)
    }

    return (
        <LayoutPeminjam>
            <Breadcrumb pageName="All Books" />
            <div className="  p-4 max-w-s mx-auto" id='Books'>

                {/* <form class=" mx-auto">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search All Books . . . " required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-secondary hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form> */}


                <div className="my-36 md:my-8 pb-12 w-[100%]  md:flex-row-reverse items-center justify-between gap-4">

                    <Swiper
                        spaceBetween={24}
                        slidesPerView={3} modules={[Navigation]} navigation centeredSlides>
                        {books.map((item) => {
                            return (
                                <SwiperSlide>
                                    <Card className="max-w-sm rounded-lg shadow-md" imgAlt="Apple Watch Series 7 in colors pink, silver, and black" renderImage={() => <img src={`http://localhost:5000/images/${item.cover}`} className='max-h-[200px] rounded-lg' />} >
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                {item.judul}
                                            </h5>
                                        </a>
                                        <div className="mb-5 mt-2.5 flex items-center">
                                            <p>{item.sinopsis}</p>
                                           
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Link to={`/peminjam/dashboard/ulasan/${item.uuid}`}>
                                            <Button className=" rounded-xl shadow-lg bg-secondary px-6 py-2 text-center text-sm font-medium text-white hover:bg-neutralDGrey focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">

                                                More
                                            </Button>
                                            
                                            </Link>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            )
                        })};
                    </Swiper>
                </div>
                {ModalContent(openModal, setOpenModal, data, setData)}
            </div>
        </LayoutPeminjam>
    )
}
