import dotenv from 'dotenv';

const API_KEY = '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';
const promptToGenerateTitle =
  'Generate a title for a banner based on the following description: ';
const promptToGenerateCallToActionContent =
  'Generate a short Call to Action for a banner ad based on the following description: ';
const promptToGenerateDescription =
  'Generate a short description for a banner ad based on the following description: ';
const ApiHeader = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + API_KEY,
};

async function getAvailableModels() {
    try {
      const response = await fetch('https://api.openai.com/v1/models', {
        method: 'GET',
        headers: ApiHeader,
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch models');
      }
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error in getAvailableModels:', error);
      throw error;
    }
  }

async function getApiText(description: string) {
  const APIBody = {
    model: 'gpt-3.5-turbo-instruct',
    prompt: promptToGenerateDescription + description,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: ApiHeader,
    body: JSON.stringify(APIBody),
  });
  const data = await response.json();
  return data.choices[0].text;
}

async function getApiTitle(description: string) {
  const APIBody = {
    model: 'gpt-3.5-turbo-instruct',
    prompt: promptToGenerateTitle + description,
    temperature: 0.7,
    max_tokens: 100,
  };
  console.log('generate text');
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: ApiHeader,
    body: JSON.stringify(APIBody),
  });
  const data = await response.json();
  return data.choices[0].text;
}

async function getApiCallToActionContent(description: string) {
  const APIBody = {
    model: 'gpt-3.5-turbo-instruct',
    prompt: promptToGenerateCallToActionContent + description,
    temperature: 0.7,
    max_tokens: 8,
  };
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: ApiHeader,
    body: JSON.stringify(APIBody),
  });
  const data = await response.json();
  return data.choices[0].text;
}

async function getApiImage(text: string) {
  const ApiBodyImage = {
    prompt: text,
    n: 1,
    size: '512x512',
  };
  console.log('generate image');
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: ApiHeader,
    body: JSON.stringify(ApiBodyImage),
  });
  const data = await response.json();
  return data;
}

export { getApiImage, getApiText, getApiTitle, getApiCallToActionContent, getAvailableModels };
