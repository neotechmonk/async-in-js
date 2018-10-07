//Dealing with multiple promises with deterministic sequence
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
  setTimeout(() => {
    let output = "<div> in  promise.js </div>";
    posts.forEach(post => {
      output += `<li> ${post.title} : ${post.body}  </li>`;
    });
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const resolveable = true;

      if (resolveable) {
        resolve("Resolved from getPosts()");
      } else {
        reject("Error : something went wrong   ");
      }
    }, 2000);
  });
}

const promise1 = Promise.resolve("Promise 1 is resolved");
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Promise 2 is resolved after 2 seconds");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Promise 3 is resolved after 2 seconds");
});

const promise4 = new Promise((resolve, reject) => {
  console.log(typeof reject);
  if (true) {
    console.log("in Promise 4");
    resolve(createPost(newPost));
  }
  if (false) {
    console.log("in Promise 4");
    reject(createPost(newPost));
  }
});

promise5 = new Promise((resolve, reject) => {
  resolve("Promise 5 is resolved after 2 seconds");
});

const promises = [promise1, promise2, promise3, promise4, promise5];

Promise.all(promises)
  .then(values => {
    getPosts();

    console.log("catpured in then :  \n" + values);
  })
  .catch(e => console.log("Caught Exception in catch " + e));
