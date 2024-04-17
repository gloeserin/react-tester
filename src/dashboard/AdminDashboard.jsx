import WelcomeBanner from "../components/WelcomeBanner";
import Header from "../components/header/Header";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';


function AdminDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState({});
    const cookies = useCookies();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(cookies);
        if (cookies[0].userId) {
            if (cookies[0].role === 'user') {
                window.location.href = '/peminjam/dashboard';
            } else if (cookies[0].role === 'petugas') {
                window.location.href = '/petugas/dashboard';
            }
        }

        const getUser = async () => {
            try {
              const res = await axios.get(`http://localhost:5000/user/${cookies[0].userId}`);
              setUser(res.data);
              setIsLoading(false);
              console.log(res.data);
            } catch (error) {
              console.log(error);
            }
          }
          getUser();
          
    }, [

        cookies
    ]);

    return (
        <div className="flex h-screen overflow-hidden">
            <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header name={user.name} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <WelcomeBanner name={user.name}  />
                        <div className="sm:flex sm:justify-between sm:items-center mb-8">
                            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-6">
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminDashboard;