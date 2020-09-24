import React, { FC } from 'react';
import styled from 'styled-components';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import LinkComponent from '../components/LinkComponest';

const Footer = styled.footer`
  width: 100%;
  height: 150px;
  background-color: #4169e1;
  color: white;
  text-align: center;
  vertical-align: middle;
`;

const ProductLogo = styled.h3`
  padding-top: 10px;
`;

const FooterUl = styled.ul`
  padding-top: 20px;
`;

const FooterMenu = styled.li`
  display: inline;
`;


const FooterComponent: FC = () => {
  const paths = ['administrator', 'privacy', 'terms', 'about', 'feedback']
  return (
    <>
      <Router>
        <Footer>
          <ProductLogo>Product Logo</ProductLogo>
          <FooterUl>
            <FooterMenu>
              <LinkComponent src={paths[0]}>home ｜</LinkComponent>
            </FooterMenu>
            <FooterMenu>
              <LinkComponent src={paths[1]}>運営者情報 ｜</LinkComponent>
            </FooterMenu>
            <FooterMenu>
              <LinkComponent src={paths[2]}>プライバシーポリシー ｜</LinkComponent>
            </FooterMenu>
            <FooterMenu>
              <LinkComponent src={paths[3]}>お問い合わせ ｜</LinkComponent>
            </FooterMenu>
            <FooterMenu>
              <LinkComponent src={paths[4]}>フィードバック ｜</LinkComponent>
            </FooterMenu>
          </FooterUl>
          <p>© All rights reserved by shoichi kimita.</p>
        </Footer>
      </Router>
    </>
  );
};

export default FooterComponent;