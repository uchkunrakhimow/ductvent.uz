import { FaTelegram } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import logo from "/image.png";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-3xl"></div>{" "}
      {/* Blurred background */}
      <div className="bg-slate-50 rounded-xl shadow-lg p-6 sm:p-8 max-w-md w-full text-center relative z-10 transition-all transform hover:shadow-xl hover:backdrop-blur-md">
        {/* Логотип */}
        <div className="mb-6">
          <img
            src={logo}
            alt="Логотип"
            className="w-24 h-24 mx-auto rounded-full sm:w-32 sm:h-32"
          />
        </div>

        {/* Заголовок */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:text-2xl">
          Ductvent.uz
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Свяжитесь с нами и узнайте больше о наших услугах.
        </p>

        {/* Кнопки */}
        <div className="space-y-4 mb-8">
          <a
            href="https://instagram.com/ductvent.uz"
            className="flex items-center justify-center bg-pink-500 text-white py-2 px-4 rounded-lg font-medium shadow-md hover:bg-pink-600 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram className="w-6 h-6 mr-2" />
            Instagram
          </a>
          <a
            href="https://t.me/dvbconst"
            className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg font-medium shadow-md hover:bg-blue-600 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="w-6 h-6 mr-2" />
            Telegram
          </a>
        </div>

        {/* Контакты */}
        <div className="text-left">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Контакты</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Адрес:</span> Ташкент, микрорайон
            "Oq uy", улица Oq-bilol, дом 41-43
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Телефон 1:</span>{" "}
            <a
              href="tel:+998900440008"
              className="text-blue-500 hover:underline"
            >
              +998 90 044-00-08
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Телефон 2:</span>{" "}
            <a
              href="tel:+998998330398"
              className="text-blue-500 hover:underline"
            >
              +998 99 833-03-98
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:ductvent.uz@mail.ru"
              className="text-blue-500 hover:underline"
            >
              ductvent.uz@mail.ru
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
