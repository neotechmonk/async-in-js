const newPost = {
  title: "post three ",
  body: "this is post three"
};

const posts = [
  {
    title: "post one ",
    body: "this is post one"
  },
  {
    title: "post two",
    body: "this is post two  "
  }
];

// Get posts
function getPosts() {
  console.log("in getPosts of  : promise.js");
  setTimeout(() => {
    let output = "<div> in  promise.js </div>";
    posts.forEach(post => {
      output += `<li> ${post.title} : ${post.body}  </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  console.log("in createPost of promise.js ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error : something went wrong   ");
      }
    }, 2000);
  });
}

createPost(newPost)
  .then(getPosts)
  .catch(e => console.log(e));
