import {  uri } from './Constants'; 

export const postForm = async (
  name: string,
  phone: string,
  category: string,
  description: string
) => {
  try {
   

    const data = { name, phone, category, description };

    const response = await fetch(`${uri}/api/product/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
      console.log(response.body);

    return responseData;
  } catch (error) {
    console.error("Error:", error);

  }
};


export const getProducts = async () => {
  try {
   
    const response = await fetch(`${uri}/api/product/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData); // Log the response data to console

    return responseData;
  } catch (error) {
    console.error("Error:", error);
    // You might want to throw the error or handle it in some other way
    throw error;
  }
};


export const postReelsText = async (
  text: string,
  
) => {
  try {
  

    const data = { text };

    const response = await fetch(`${uri}/api/fixed-response`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
      console.log(response.body);

    return responseData;
  } catch (error) {
    console.error("Error:", error);

  }
};
