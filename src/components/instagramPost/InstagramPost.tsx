import styled from 'styled-components';
import Title from '../common/Title';
import Button from '../common/Button';
import { BrandColor } from '../../utils/GlobalStyles';

interface InstagramPostProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  callToActionContent?: string;
  callToAction?: () => void;
}

const Banner = styled.div`
width: 500px;
height: 500px;
background-color: ${BrandColor.GRAY_LIGHT};
`;

const Image = styled.img`
width: 200px;
height: 200px;
`;

const Description = styled.p`
margin-bottom: 20px;
margin-top: 20px;
`;

function InstagramPost({
  imageUrl = 'https://pic.onlinewebfonts.com/thumbnails/icons_148071.svg',
  title = 'Banner title',
  description = 'Banner description',
  callToActionContent = 'Call to action',
  callToAction,
}: InstagramPostProps) {
  return (
    <Banner>
      <Image src={imageUrl} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button
        color={BrandColor.BLACK}
        children={callToActionContent}
        onClick={callToAction}
        disabled={false}
      />
    </Banner>
  );
}

export default InstagramPost;
