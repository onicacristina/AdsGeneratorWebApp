import styled from 'styled-components';
import { BrandColor } from '../../utils/GlobalStyles';

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;

const LoaderView = styled.div`
  border: 4px solid ${BrandColor.GRAY_LIGHT}; 
  border-top: 4px solid ${BrandColor.BLUE}; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin-right: 20px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  font-size: 18px;
  color: ${BrandColor.BLUE}; 
`;

function Loader() {
  return (
    <LoaderContainer>
      <LoaderView />
      <LoadingText>Loading...</LoadingText>
    </LoaderContainer>
  );
}

export default Loader;
