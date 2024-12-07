// what is api
// How api works

const postApi = 'https://jsonplaceholder.typicode.com/todos/1';

  fetch(postApi)
    .then(function (dataFromUrl) {
      // reseive the json data & return
      return dataFromUrl.json();
    })
    .then(function (json) {
      for (let index = 0; index < 10; index++) {
      console.log(json[index]);
      }
    });
