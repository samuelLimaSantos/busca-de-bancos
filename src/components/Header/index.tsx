import React from 'react';
import logoImg from '../../assets/logo_justa.svg';
import { Link } from 'react-router-dom';
import aboutUsIcon from '../../assets/about-us-icon.svg';
import './styles.css';

const Header: React.FC = () => {

  function handleShowMenu() {
    document.querySelector('header')?.classList.toggle('activate');
    document.body.classList.toggle('hidden');
  }

  return (
    <header>
      <img src={logoImg} alt="Imagem da logo" />
      <div className="menu-toggle" onClick={handleShowMenu}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      <ul className='itensMenu'>
        <li>
          <Link to="/aboutUs">
            Sobre nós
            </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/aboutUs">
            <span>
              <img src={aboutUsIcon} alt="Ícone do sobre nós" />
            </span>
            Sobre nós
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
