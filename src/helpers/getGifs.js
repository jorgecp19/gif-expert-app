export const getGifs = async (category) => {
  const apiKey = 'mlH3MaWG05V2n8uiWlq2Kks7bUcij1zP';
  const baseUrl = 'https://api.giphy.com/v1/gifs';

  const url = `${baseUrl}/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`
  
  const response = await fetch(url);
  const responseBody = await response.json();
  
  const gifs = responseBody.data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    }
  });

  return gifs;
}