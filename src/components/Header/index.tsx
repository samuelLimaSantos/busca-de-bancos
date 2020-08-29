import React from 'react';
import logoImg from '../../assets/logo_justa.svg';
import { Link } from 'react-router-dom';
import aboutUsIcon from '../../assets/about-us-icon.svg';
import homeIncon from '../../assets/home_icon.svg';
import './styles.css';

interface HeaderProps {
  label: string;
  link: string;
}

const Header: React.FC<HeaderProps> = ({ label, link }) => {

  function handleShowMenu() {
    document.querySelector('header')?.classList.toggle('activate');
    document.body.classList.toggle('hidden');
  }

  return (
    <header>
      <a href="https://www.justa.com.vc/">
        <img src={logoImg} alt="Imagem da logo" />
      </a>
      <div className="menu-toggle" onClick={handleShowMenu}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      <ul className='itensMenu'>
        <li>
          <Link to={link}>
            {label}
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to={link}>
            <span>
              <img src={label === 'Home' ? homeIncon : aboutUsIcon} alt="Ícone" />
            </span>
            {label}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
