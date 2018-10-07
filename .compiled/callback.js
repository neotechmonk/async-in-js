"use strict";

var newPost = {
  title: "post three ",
  body: "this is post three"
};

var posts = [{
  title: "post one ",
  body: "this is post one"
}, {
  title: "post two",
  body: "this is post two  "
}];

// Get posts
function getPosts() {
  console.log("in getPosts of callback.js ");
  setTimeout(function () {
    var output = "<div> in callback.js </div>";
    posts.forEach(function (post) {
      output += "<li> " + post.title + " : " + post.body + "  </li>";
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    console.log("in createPost of callback.js ");

    callback();
  }, 2000);
}

createPost(newPost, getPosts);
//# sourceMappingURL=callback.js.map