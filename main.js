// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const heartSt = document.querySelectorAll(".like-glyph");
const allHeart = Array.from(heartSt);
allHeart.forEach((heart) => heart.addEventListener("click", handleLike));
const hide = document.querySelector("#modal");
hide.classList.add("hidden");
function handleLike(e) {
  const heartBtn = e.target;
  mimicServerCall()
    .then(() => {
      // fill the heart and update
      if (heartBtn.firstChild.nodeValue == "♡") {
        const likeHeart = heartBtn.classList.add("activated-heart");
        heartBtn.replaceChildren(FULL_HEART);
      } else {
        heartBtn.classList.remove("activated-heart");
        heartBtn.replaceChildren(EMPTY_HEART);
      }
    })
    .catch(() => {
      hide.classList.remove("hidden");
      setTimeout(() => hide.classList.add("hidden"), 3000);
    });
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
