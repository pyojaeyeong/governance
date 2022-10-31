import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "./useDetectClose";

const DropupMenu = () => {
  const [btnIsOpen, btnRef, btnHandler] = useDetectClose(false);

  return (
    <DropdownContainer>
      <DropdownButton onClick={btnHandler} ref={btnRef}>
        <img src="./image/gnb_black.png" alt="footer gnd change btn"></img>
      </DropdownButton>
      <Menu isDropped={btnIsOpen}>
        <Ul>
          <Li>
            <LinkWrapper href="/">English</LinkWrapper>
          </Li>
          <Li>
            <LinkWrapper href="/">한국어</LinkWrapper>
          </Li>
        </Ul>
      </Menu>
    </DropdownContainer>
  );
};

export default DropupMenu;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  background: #2e2e2e;
  position: absolute;
  top: -100px;
  left: 100%;
  width: 150px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-55%, 20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    bottom: -15%;
    left: 35%;
    transform: translate(35%);
    border: 12px solid transparent;
    border-bottom-width: 0;
    border-top-color: #2e2e2e;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-55%);
      left: 100%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;
