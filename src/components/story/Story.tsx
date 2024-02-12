import styled from 'styled-components';
import Title from '../common/Title';
import Button from '../common/Button';
import { BrandColor } from '../../utils/GlobalStyles';

interface StoryProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  callToActionContent?: string;
  callToAction?: () => void;
}

const Banner = styled.div`
width: 1080px; 
height: 1920px;
background-color: ${BrandColor.GRAY_LIGHT};
`;

const Image = styled.img`
width: 1080px;
height: 1080px;
object-fit: cover;
`;

const Description = styled.p`
margin-bottom: 20px;
margin-top: 20px;
`;

const TextContainer = styled.div`
  margin: 20px;
`;

function Twitterheader({
  imageUrl = 'https://pic.onlinewebfonts.com/thumbnails/icons_148071.svg',
  title = 'Banner title',
  description = 'Banner description',
  callToActionContent = 'Call to action',
  callToAction,
}: StoryProps) {
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
