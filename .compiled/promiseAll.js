"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//Dealing with multiple promises with deterministic sequence
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
  setTimeout(function () {
    var output = "<div> in  promise.js </div>";
    posts.forEach(function (post) {
      output += "<li> " + post.title + " : " + post.body + "  </li>";
    });
  }, 1000);
}

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      var resolveable = true;

      if (resolveable) {
        resolve("Resolved from getPosts()");
      } else {
        reject("Error : something went wrong   ");
      }
    }, 2000);
  });
}

var promise1 = Promise.resolve("Promise 1 is resolved");
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000, "Promise 2 is resolved after 2 seconds");
});
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000, "Promise 3 is resolved after 2 seconds");
});

var promise4 = new Promise(function (resolve, reject) {
  console.log(typeof reject === "undefined" ? "undefined" : _typeof(reject));
  if (true) {
    console.log("in Promise 4");
    resolve(createPost(newPost));
  }
  if (false) {
    console.log("in Promise 4");
    reject(createPost(newPost));
  }
});

promise5 = new Promise(function (resolve, reject) {
  resolve("Promise 5 is resolved after 2 seconds");
});

var promises = [promise1, promise2, promise3, promise4, promise5];

Promise.all(promises).then(function (values) {
  getPosts();

  console.log("catpured in then :  \n" + values);
}).catch(function (e) {
  return console.log("Caught Exception in catch " + e);
});
//# sourceMappingURL=promiseAll.js.map