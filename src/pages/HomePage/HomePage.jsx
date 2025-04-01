import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Giả sử bạn dùng React Router
import styles from './HomePage.module.css';
import gameLogo from '@/assets/images/game-logo.png'; // Placeholder logo
import gameBg1 from '@/assets/images/game-bg-1.jpg'; // Placeholder background image 1
import gameBg2 from '@/assets/images/game-bg-2.jpg'; // Placeholder background image 2

function HomePage() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Logic kiểm tra đăng nhập tạm thời (localStorage)
        const token = localStorage.getItem('authToken'); // Ví dụ token
        setIsLoggedIn(!!token); // !!token chuyển đổi token (null/string) thành boolean
    }, []);

    const handlePlayButtonClick = () => {
        if (isLoggedIn) {
            // Chuyển đến trang sảnh game (GameLobbyPage - chưa có route thật)
            navigate('/game-lobby'); // Cần cấu hình React Router sau
            console.log("Chuyển đến sảnh game (nếu có route '/game-lobby')");
        } else {
            // Chuyển đến trang đăng nhập/đăng ký (LoginPage - chưa có route thật)
            navigate('/login'); // Cần cấu hình React Router sau
            console.log("Chuyển đến trang đăng nhập/đăng ký (nếu có route '/login')");
        }
    };

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${gameBg1})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay tối màu */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <img src={gameLogo} alt="Lĩnh Quân Tinh Chiến Logo" className="max-w-md w-full mb-8" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
                    Lĩnh Quân Tinh Chiến
                </h1>
                <p className="text-lg md:text-xl text-center mb-8 px-4 md:px-16 lg:px-32">
                    Tham gia vào những trận chiến tinh tế, điều binh khiển tướng, xây dựng đế chế hùng mạnh trong thế giới Lĩnh Quân Tinh Chiến!
                </p>
                <button
                    onClick={handlePlayButtonClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl md:text-2xl shadow-lg transition duration-300"
                >
                    {isLoggedIn ? 'Vào Sảnh Game' : 'Chơi Ngay'}
                </button>
                <p className="mt-4 text-sm text-gray-300">
                    {isLoggedIn ? '' : 'Chưa có tài khoản? <a href="/register" className="text-blue-400 hover:underline">Đăng ký</a>'}
                </p>
            </div>
            {/* Thêm các ảnh trang trí game nếu muốn */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around p-4">
                <img src={gameBg2} alt="Game Decoration 1" className="hidden md:block max-h-48 rounded-lg shadow-md" />
                {/* Thêm ảnh trang trí khác nếu cần */}
            </div>
        </div>
    );
}

export default HomePage;