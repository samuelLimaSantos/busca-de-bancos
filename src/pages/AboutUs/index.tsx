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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt recusandae, hic temporibus delectus nostrum ducimus voluptatem totam quia culpa alias omnis dolore obcaecati sapiente illo vero. Saepe, ad aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui illo dicta nihil, aspernatur optio adipisci ratione aliquid obcaecati error, commodi corporis? Error reprehenderit officia maxime dolores, enim sint aspernatur?</p>
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