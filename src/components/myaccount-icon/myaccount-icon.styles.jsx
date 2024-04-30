import styled from "styled-components";


export const AccountIconContainer = styled.div`
	width: 45px;
  height: 62px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    .content {
      display: block;
    }
  }
`;