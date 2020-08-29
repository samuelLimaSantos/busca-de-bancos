import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Header from '../../components/Header';
import deleteIcon from '../../assets/delete_icon.svg';
import './styles.css';

interface BankData {
  value: string;
  label: string;
  name: string;
  img: string;
}

const Home: React.FC = () => {
  const [banks, setBanks] = useState([
    {
      value: 'nubank',
      label: '001- Banco NuBank',
      name: 'Banco Nubank S/A',
      img: 'https://pbs.twimg.com/profile_images/1145752508159135744/o2hFZ2Wc_400x400.png'
    },
    {
      value: 'itau',
      label: '002- Banco Itaú',
      name: 'Banco Itaú S/A',
      img: 'https://santosbancarios.com.br/uploads/images/2020/01/itau-e-acusado-de-racismo-1580499787.jpg'
    },
    {
      value: 'brasil',
      label: '003- Banco do Brasil',
      name: 'Banco do Brasil S/A',
      img: 'data:image/png;base64,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'
    },
    {
      value: 'bradesco',
      label: '004- Banco Bradesco',
      name: 'Banco Bradesco S/A',
      img: 'https://1.bp.blogspot.com/_ah3XcoPIV2g/S1qiFlyGjnI/AAAAAAAABJ8/od3G3d9_tIw/w1200-h630-p-k-no-nu/Bradesco+1.JPG',
    },
    {
      value: 'caixa',
      label: '005- Banco Caixa',
      name: 'Banco Caixa S/A',
      img: 'https://www.causc.gov.br/wp-content/uploads/2019/10/caixa.png'
    },
    {
      value: 'santander',
      label: '006- Banco Santander',
      name: 'Banco Santander S/A',
      img: 'data:image/png;base64,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'
    },
    {
      value: 'inter',
      label: '006- Banco Inter',
      name: 'Banco Inter S/A',
      img: 'https://miro.medium.com/max/1200/1*gnpyFByB8mvYgAzxNbOWKg.png'
    }
  ]);

  const [selectedBank, setSelectedBank] = useState<any>([]);

  function handleDeleteBank(value: string) {
    const newBanksSelected = selectedBank.filter((bank: BankData) => bank.value !== value);
    setSelectedBank(newBanksSelected);
  }

  return (
    <div className="home-page">
      <Header label="Sobre nós" link="/aboutUs" />
      <div className="home-content">
        <h1>
          Bem vindo a busca de bancos
        </h1>
        <span></span>
        <div className="input-select">
          <label htmlFor="bank">
            <h2>Banco</h2>
          </label>
          <Select
            options={banks}
            isMulti
            value={selectedBank}
            placeholder="Digite o nome do banco"
            onChange={setSelectedBank}
          />
        </div>
        {selectedBank !== null && selectedBank.map((bank: BankData) => (
          <div className="bank-list" key={bank.value}>
            <div className="header-bank-list">
              <p>Banco selecionado</p>
              <img src={deleteIcon} alt="ícone de deletar" onClick={() => {
                handleDeleteBank(bank.value);
              }} />
            </div>
            <div className="content-bank-list">
              <img src={bank.img} />
              <div className="text-content-bank-list">
                <p>{bank.label}</p>
                <p>{bank.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;