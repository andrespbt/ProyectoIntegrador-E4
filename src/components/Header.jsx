import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { Button } from './Button';
import { UserIcon } from './icons';
import { useState } from 'react';

// const buttonClass = 'h-8 text-black bg-mainYellow rounded-xl';
const buttonClassMobile = 'h-8 text-black bg-mainYellow rounded-xl text-xs';

export const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setisModalOpen] = useState(false);

  const onModalButtonClick = () => {
    setisModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-mainBlack h-[4.2rem] w-full flex items-center justify-between px-4 relative">
      {/* Left */}
      <div
        onClick={() => navigate('home')}
        className="hover:cursor-pointer"
      >
        <h1>
          <img
            src={Logo}
            alt="4Music sharing your passion"
            className="h-full w-16"
          />
        </h1>
      </div>

      {/* Right */}

      <button
        className="mr-2 md:hidden"
        onClick={onModalButtonClick}
      >
        <UserIcon
          viewBox="0 0 15 15"
          width="35px"
          height="35px"
          fill="white"
        />
      </button>

      {isModalOpen && (
        <div className="gap-6 flex flex-col absolute right-0 top-[4.2rem] bg-mainBlack w-40 p-4 rounded-bl-xl">
          <Button
            customClass={buttonClassMobile}
            text="Crear cuenta"
            onClick={() => setisModalOpen(false)}
          />
          <Button
            customClass={buttonClassMobile}
            text="Iniciar Sesión"
            onClick={() => setisModalOpen(false)}
          />
        </div>
      )}
{/* 
      <div className="gap-6 hidden md:flex">
        <Button customClass={buttonClass} />
        <Button customClass={buttonClass} />
      </div> */}
    </header>
  );
};
