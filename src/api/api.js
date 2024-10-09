// api/api.js
// const BASE_URL = 'http://localhost:5000';
// const BASE_URL = 'http://3.86.146.122:5000';
const BASE_URL = 'https://pk20l61n-5000.inc1.devtunnels.ms';

export async function searchLocalProducts(query) {
  try {
    // Construct the URL with the query parameter
    const url = `${BASE_URL}/api/products/search-local?query=${query}`;
    const response = await fetch(url);

    // Check if the response is ok
    if (!response.ok) {
      // Handle HTTP errors
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    // Parse JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle fetch and parsing errors
    if (error.name === 'TypeError' && error.message.includes('failed to fetch')) {
      throw new Error('Network error: Unable to reach the server. Please check your connection or try again later.');
    } else if (error.name === 'SyntaxError') {
      throw new Error('Invalid JSON response: The server returned an unexpected format.');
    } else {
      throw new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
}


export async function searchAmazonProducts(query) {
  try {
    // Construct the URL with the query parameter
    const url = `${BASE_URL}/api/products/search-amazon?query=${query}`;
  
    const response = await fetch(url);

    // Check if the response is ok
    if (!response.ok) {
      // Handle HTTP errors
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    // Parse JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle fetch and parsing errors
    if (error.name === 'TypeError' && error.message.includes('failed to fetch')) {
      throw new Error('Network error: Unable to reach the server. Please check your connection or try again later.');
    } else if (error.name === 'SyntaxError') {
      throw new Error('Invalid JSON response: The server returned an unexpected format.');
    } else {
      throw new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
}


// Function to fetch and save a product by ASIN
export async function fetchProductByAsin(asin) {
    try {
      const response = await fetch(`${BASE_URL}/api/products/product/${asin}`);
      
      if (!response.ok) {
        // Handles HTTP errors (4xx, 5xx responses)
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Failed to fetch product details';
        throw new Error(`HTTP Error: ${errorMessage}`);
      }
  
      // Handles network errors or JSON parsing issues
      try {
        return await response.json();
      } catch (parseError) {
        throw new Error('Error parsing JSON response');
      }
    } catch (error) {
      // Handles network errors or other issues
      console.error('Error fetching product:', error.message);
      throw error;
    }
  }
  export async function fetchRecentProducts(page, limit) {
    try {
      const response = await fetch(`${BASE_URL}/api/products/recent-products?page=${page}&limit=${limit}`);
  
      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to fetch recent products";
        throw new Error(errorMessage);
      }
  
      const data = await response.json();
      return data; // Return the fetched data
  
    } catch (err) {
      // Handle network or other errors
      console.error('Error fetching recent products:', err.message);
      throw err; // Rethrow the error so it can be caught by the caller
    }
  }
  export async function fetchLastRecentProducts() {
    try {
      const response = await fetch(`${BASE_URL}/api/products/last-recent-products`);
  
      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to fetch recent products";
        throw new Error(errorMessage);
      }
  
      const data = await response.json();
      return data; // Return the fetched data
  
    } catch (err) {
      // Handle network or other errors
      console.error('Error fetching recent products:', err.message);
      throw err; // Rethrow the error so it can be caught by the caller
    }
  }
  

  // Named export of the async function
export async function createUser(userData) {
  try {
    const response = await fetch('http://your-backend-url/create-User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add Authorization header if needed
        'Authorization': 'Bearer YOUR_JWT_TOKEN'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    return await response.json(); // Return the result of the request
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
}
