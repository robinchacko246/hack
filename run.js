const axios = require('axios');

const generateRandomEmail = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let email = '';
  for (let i = 0; i < 10; i++) {
    email += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${email}@yopmail.com`;
};

const registerUser = async () => {
  const payload = {"first_name":"test","last_name":"test","email":"test@yopmail.com","phone":"11111111111","message":"adsadsa"}

  try {
    const response = await axios.post('https://api.starmyfamilystar.ca/api/contact', payload);
    console.log('User registered successfully:', response.data);
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
  }
};

// Call registerUser function infinitely with a delay
const delay = 5000; // delay in milliseconds (5000ms = 5 seconds)
setInterval(registerUser, 0);
