import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  route: string;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  route,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className={route === 'dashboard' ? 'active' : ''} to="/">
          Listagem
        </Link>
        <Link className={route === 'import' ? 'active' : ''} to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
