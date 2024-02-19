interface RequestOptions {
    method: string;
    headers?: Record<string, string>;
    body?: BodyInit | null | undefined
}

const fetchRequest = async (method:string, url:URL, params = {}) => {
   
    const options:RequestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Add body
    if (['POST', 'PUT'].includes(method)) {
      options.body = JSON.stringify(params);
    }
  
    try {
      
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error during fetch:', error);
      throw error; 
    }
  };
  
export default fetchRequest;