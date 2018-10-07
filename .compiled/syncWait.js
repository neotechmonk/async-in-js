"use strict";

var createPost = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(post) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("in createPost of promise.js ");

            console.log("before await");
            _context.next = 4;
            return setTimeout(function () {
              posts.push(post);
              console.log("after  await + before getPosts");
            }, 5000);

          case 4:
            _context.next = 6;
            return getPosts();

          case 6:
            console.log("after getPosts");

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createPost(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
  console.log("in getPosts of  : promise.js");
  setTimeout(function () {
    var output = "<div> in  promise.js </div>";
    posts.forEach(function (post) {
      output += "<li> " + post.title + " : " + post.body + "  </li>";
    });
    //  document.body.innerHTML = output;
  }, 1000);
}

createPost(newPost);
//# sourceMappingURL=syncWait.js.map