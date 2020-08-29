import React from 'react';
import Header from '../../components/Header';
import heartIcon from '../../assets/heart_icon.svg';
import githubIcon from '../../assets/github_icon.svg';
import linkedinIcon from '../../assets/linkedin_icon.svg';
import './styles.css';


const AboutUs: React.FC = () => {
  return (
    <div className="aboutUs-page">
      <Header label="Home" link="/" />
      <div className="aboutUsContent">
        <h1>Sobre o projeto</h1>
        <span></span>
        <p>O buscador de bancos é um projeto desenvolvido por Samuel Santos com o objetivo de realizar o teste prático para vaga de desenvolvedor front-end JR da Justa Pagamentos. Nesta pequena aplicação o usuário pode interagir com uma lista de bancos, com a opção de adicioná-los e retirá-los da lista.</p>
      </div>
      <div className="footer">
        <p>Desenvolvido com {"  "}
          <img src={heartIcon} alt="ícone de coração" />
          {"  "}
          por Samuel Santos
        </p>
        <div className="social-medias">
          <a href="https://github.com/samuelLimaSantos" target="_blank">
            <img src={githubIcon} alt="Ícone do Github" />
          </a>

          <a href="https://www.linkedin.com/in/samuel-santos-036375174/" target="_blank">
            <img src={linkedinIcon} alt="Ícone do Linkedin" />
          </a>

        </div>
      </div>

    </div>
  );
}

export default AboutUs;