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
  {
    title: 'Post 4',
    author: 'Nasir',
    description: 'This is post description',
    like: 748,
  },
  

];

posts.forEach(function (post) {
  renderHtml(post);
});

function renderHtml(postObject) {
  let html = `<div class="post-item">
      <h1>${postObject.title}</h1>
      <h4>${postObject.author}</h4>
      <p>
      ${postObject.description}
      </p>
      <p>Likes: ${postObject.like} </p>
    </div>`;
  postGrid.innerHTML += html;
}