import React, { FC } from 'react';
import styled from 'styled-components';

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
  return (
    <>
      
      <Footer>
        <ProductLogo>Product Logo</ProductLogo>
        <FooterUl>
          <FooterMenu><a href='#'>home ｜</a></FooterMenu>
          <FooterMenu><a href='#'>運営者情報 ｜</a></FooterMenu>
          <FooterMenu><a href='#'>利用規約 ｜</a></FooterMenu>
          <FooterMenu><a href='#'>プライバシーポリシー ｜</a></FooterMenu>
          <FooterMenu><a href='#'>お問い合わせ ｜</a></FooterMenu>
          <FooterMenu><a href='#'>フィードバック</a></FooterMenu>
        </FooterUl>
        <p>© All rights reserved by shoichi kimita.</p>
      </Footer>
    </>
  );
};

export default FooterComponent;