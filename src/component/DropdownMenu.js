import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "./useDetectClose";

const DropdownMenu = () => {
  const [btnIsOpen, btnRef, btnHandler] = useDetectClose(false);

  return (
    <DropdownContainer>
      <DropdownButton onClick={btnHandler} ref={btnRef}>
        <img src="./image/gnb_right_menu.png" alt=""></img>
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

export default DropdownMenu;

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
  top: 52px;
  left: 100%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-100%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 100%;
    transform: translate(-100%, -70%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #2e2e2e;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-100%);
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

  list-style-type: none;
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
