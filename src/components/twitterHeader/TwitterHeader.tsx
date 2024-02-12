import styled from 'styled-components';
import { BrandColor } from '../../utils/GlobalStyles';
import Button from '../common/Button';

interface TwitterPostProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  callToActionContent?: string;
  callToAction?: () => void;
}

const Banner = styled.div`
  display: flex;
  width: 1500px;
  height: 500px;
  background-color: #eae9e9;
  align-items: center; 
  justify-content: space-between; 
  padding: 20px; 
  
`;

const Image = styled.img`
  width: 500px; 
  height: 500px; 
`;

const TextContainer = styled.div`
  width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 10px; 
`;

const Description = styled.p`
  margin-bottom: 20px; 
`;

function Twitterheader({
  imageUrl = 'https://pic.onlinewebfonts.com/thumbnails/icons_148071.svg',
  title = 'Banner title',
  description = 'Banner description',
  callToActionContent = 'Call to action',
  callToAction,
}: TwitterPostProps) {
  return (
    <Banner>
      <Image src={imageUrl} />
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          color={BrandColor.BLACK}
          children={callToActionContent}
          onClick={callToAction}
          disabled={false}
        />
      </TextContainer>
    </Banner>
  );
}

export default Twitterheader;
