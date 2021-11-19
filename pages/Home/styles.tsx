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

export const MainLinksContainer = styled.div`
  width: 100%;
  max-width: 1600px;

  display: flex;
  justify-content: space-between;

  padding: 24px 0px;
`;

export const ListItem = styled.li`
  margin-top: 16px;
`;

export const Divider = styled.span`
  padding: 0px 10px;
`;
