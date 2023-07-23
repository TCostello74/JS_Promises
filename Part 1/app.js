const axios = require('axios');

let favNumber = 4;
let baseURL = "http://numbersapi.com";

// 1.
axios.get(`${baseURL}/${favNumber}?json=true`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

// 2.
let favNumbers = [8, 12, 24];
axios.get(`${baseURL}/${favNumbers.join(',')}?json=true`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return axios.get(`${baseURL}/${favNumber}?json=true`)
  })
)
.then(responseArr => {
  responseArr.forEach(response => console.log(response.data.text));
})
.catch(error => {
  console.log(error);
});
