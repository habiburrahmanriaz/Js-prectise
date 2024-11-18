let postGrid = document.querySelector('.post-grid');

let posts = [
  {
    title: 'Post 1',
    author: 'Helal',
    description: 'This is post description',
    like: 110,
  },
  { 
    title: 'Post 2',
    author: 'Habib',
    description: 'This is post description',
    like: 54,
  },
  {
    title: 'Post 3',
    author: 'Jubayer',
    description: 'This is post description',
    like: 78,
  },

];

posts.forEach(function (post) {
  let html = `<div class="post-item">
      <h1>${post.title}</h1>
      <h4>${post.author}</h4>
      <p>
      ${post.description}
      </p>
      <p>Likes: ${post.like} </p>
    </div>`;
  postGrid.innerHTML += html;
});

