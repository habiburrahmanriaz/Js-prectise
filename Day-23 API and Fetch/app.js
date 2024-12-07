// what is api
// How api works

//API endpoint
const postApi = "https://jsonplaceholder.typicode.com/posts";

// fetch data
  fetch(postApi)
    .then(function (respones) {
      // resovle the promise
      return respones.json();
    })
    .then(function (posts) {
      // receive the data & loop through the data 
      posts.forEach(function (item) {
        console.log(item.title);
      })
      
    });
