import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f7f7f7;
`;

export const RowContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  padding: 0px 12px;

  align-items: center;
`;

export const RowContainerEnd = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  align-items: center;
`;

export const CommonListContainer = styled.ul`
  list-style-type: none;

  margin: 0px;
  padding: 0px;
`;

export const RowList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SocialMedia = styled.ul`
  list-style-type: none;

  width: 102px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainLinksContainer = styled.div`
  width: 100%;
  max-width: 1600px;

  padding: 24px 0px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const FooterInfoContainer = styled.div`
  width: 100%;
  max-width: 1600px;

  padding: 24px 0px;

  display: flex;
`;

export const ListItem = styled.li`
  margin-top: 16px;
`;

export const Divider = styled.span`
  padding: 0px 10px;
`;

export const ListTitle = styled.h3`
  font-family: "Circular-Medium";
  font-size: 14px;
`;

export const ListLink = styled.a`
  font-family: "Circular-Light";
  font-size: 14px;
  color: #222222;

  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;

  :hover {
    cursor: pointer;
  }

  display: flex;
  align-items: center;
`;

export const DecoratedText = styled.span`
  padding-left: 8px;
  text-decoration: underline;
`;

export const SimpleText = styled.span`
  font-family: "Circular-Light";
  font-size: 14px;
`;

export const ListSection = styled.section`
  padding: 0px 12px;
`;
