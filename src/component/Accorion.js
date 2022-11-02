import React from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #a484ff;
  color: #1a1a1a;
`;

const Inner = styled.div`
  color: #1a1a1a;
`;

const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  font-size: 1rem;
  text-align: left;
  background: #a484ff;
  color: inherit;
  cursor: pointer;
`;

const HeaderIcon = styled.span`
  transform: rotate(${(props) => (props.isActive ? -180 : 0)}deg);
  transition: all 0.2s;
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(props) => {
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
  transition: height 0.35s;
`;

const AccordionContent = ({ onClick, itemName, itemContent, isActive }) => {
  return (
    <React.Fragment>
      <Header onClick={onClick}>
        {itemName}
        <HeaderIcon isActive={isActive} className="meterial-icons">
          <i class="material-icons">expand_more</i>
        </HeaderIcon>
      </Header>
      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </React.Fragment>
  );
};

export { AccordionContainer, AccordionContent };
