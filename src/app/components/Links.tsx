import React from 'react';
import styled from 'styled-components';
import { Layout } from '../consts/Layout';
import { Color } from '../consts/Color';
import githubIcon from '../assets/images/github.png';
import twitterIcon from '../assets/images/twitter.png';
import atcoderIcon from '../assets/images/atcoder.png';

const Wrapper = styled.div`
  margin-top: 100px;
  @media (max-width: 411px) {
    margin-top: 30px;
  }
`;

const Title = styled.h1`
  font-size: ${Layout.Text.Largest}px;
  color: ${Color.Black1};
  margin: 0 auto;
  border-bottom: 2px solid ${Color.Black1};
  width: 100px;
  margin-bottom: 40px;
  @media (max-width: 411px) {
    font-size: ${Layout.Text.Larger}px;
    width: 70px;
    margin-bottom: 20px;
  }
`;

const LinksIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
  }
`;

const LinkIcon = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 411px) {
    width: 30px;
    height: 30px;
  }
`;

export const Links = () => {
  return (
    <Wrapper>
      <Title>Links</Title>
      <LinksIconWrapper>
        <Link href="https://github.com/yotaiyo" target="_blank">
          <LinkIcon src={githubIcon} alt="github" />
        </Link>
        <Link href="https://twitter.com/yotaiyo_1218" target="_blank">
          <LinkIcon
            src={twitterIcon}
            style={{ marginLeft: 30, marginRight: 30 }}
            alt="twitter"
          />
        </Link>
        <Link href="https://atcoder.jp/users/yotaiyo" target="_blank">
          <LinkIcon src={atcoderIcon} alt="atcoder" />
        </Link>
      </LinksIconWrapper>
    </Wrapper>
  );
};
