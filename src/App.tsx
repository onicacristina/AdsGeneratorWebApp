import { ChangeEvent, FC, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Button from './components/common/Button';
import Title from './components/common/Title';
import Textarea from './components/inputs/InputField';
import RadioButtonGroup from './components/inputs/RadioButtonGroup';
import InstagramPost from './components/instagramPost/InstagramPost';
import Loader from './components/loader/Loader';
import Story from './components/story/Story';
import TwitterHeader from './components/twitterHeader/TwitterHeader';
import { BannerTypes } from './utils/BannerTypes';
import {
  getApiCallToActionContent,
  getApiImage,
  getApiText,
  getApiTitle,
  getAvailableModels,
} from './utils/getApiData';
import { BrandColor } from './utils/GlobalStyles';

interface AppProps {
  name?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  text-align: center;
`;

const TextAreaContainer = styled.div`
  margin-top: 20px;
  width: 100%;  
  max-width: 800px;
`;

const App: FC<AppProps> = ({ name }) => {
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [callToActionContent, setCallToActionContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    BannerTypes.INSTAGRAM_POST
  );

  const bannerComponents = {
    [BannerTypes.INSTAGRAM_POST]: InstagramPost,
    [BannerTypes.TWITTER_HEADER]: TwitterHeader,
    [BannerTypes.STORY]: Story,
  };

  const BannerComponent = bannerComponents[selectedValue];

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const options = Object.values(BannerTypes).map((value) => ({
    label: value,
    value: value,
  }));

  const handleRadioChange = (value: string) => {
    setSelectedValue(value as BannerTypes); 
  };

  async function fetchAvailableModels() {
    try {
      const models = await getAvailableModels();
      console.log('Available models:', models);
    } catch (error) {
      console.error('Error fetching models:', error);
    }
  }

  async function callOpenAIAPI() {
    try {
      setIsLoading(true);

      const [
        imageResponse,
        descriptionResponse,
        titleResponse,
        callToActionContent,
      ] = await Promise.all([
        getApiImage(inputValue),
        getApiText(inputValue),
        getApiTitle(inputValue),
        getApiCallToActionContent(inputValue),
      ]);

      const imageData = imageResponse.data;
      setImageUrl(imageData[0].url);
      setDescription(descriptionResponse);
      setTitle(titleResponse);
      setCallToActionContent(callToActionContent);
    } catch (error) {
      console.error('Error in callOpenAIAPI:', error);
      alert(`An error occurred. Try again!`);
    } finally {
      setIsLoading(false);
    }
  }

  function callToAction() {
    alert(callToActionContent);
  }

  return (
    <Container>
      <Title>Banner Generator: Turn your ideas into exciting banners!</Title>
      <p>
        Choose the type of banner, fill in the description, and you'll have a
        professional ad in just a few moments.
      </p>
      <RadioButtonGroup
        options={options}
        selectedValue={selectedValue}
        onChange={handleRadioChange}
      />
      <TextAreaContainer>
        <Textarea
          placeholder="Enter the description here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          color={BrandColor.BLUE}
          textColor={BrandColor.BLACK}
          disabled={!inputValue || isLoading}
          children="Generate Ad"
          onClick={callOpenAIAPI}
        />
      </TextAreaContainer>
      <div>
        {isLoading && <Loader />}
        {!isLoading && imageUrl !== '' && BannerComponent && (
          <>
            <h3>The generated banner is: </h3>
            <BannerComponent
              imageUrl={imageUrl}
              title={title}
              description={description}
              callToActionContent={callToActionContent}
              callToAction={callToAction}
            />
          </>
        )}
      </div>
    </Container>
  );
};

export default App;
