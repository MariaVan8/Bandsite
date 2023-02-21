// Select DOM elements
const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");

// Initialize comment array with default comments
const commentArray = [
  {
    name: "Connor Walton",
    comment: `This is art. This is inexplicable magic expressed in the purest way,
        everything that makes up this majestic work deserves reverence. Let
        us appreciate this for what it is and what it contains`,
    date: new Date("02/17/2021"),
  },
  {
    name: "Emilie Beach",
    comment: `I feel so blessed to have seen them in person. What a show! They
        were just perfection. If there was one day of my life I could
        relieve, this would be it. What an incredible day.`,
    date: new Date("01/09/2021"),
  },
  {
    name: "Miles Acosta",
    comment: `I can't stop listening. Every time I hear one of their songs - the
        vocals - it gives me goosebumps. What a beautiful expression of
        creativity. Can't get enough.`,
    date: new Date("12/20/2020"),
  },
];

// Display all comments on page load
commentArray.forEach(displayComment);

// Event listener for submitting a new comment
commentForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page from reloading

  // Get values from form
  const nameInput = document.getElementById("name__input");
  const commentInput = document.getElementById("comment__input");
  const name = nameInput.value;
  const comment = commentInput.value;
  const date = new Date();

  // Construct new comment object
  const newComment = { name, comment, date };

  // Add new comment to comment array
  commentArray.unshift(newComment);

  // Clear comment list on page
  commentList.innerHTML = "";

  // Display all comments on page
  commentArray.forEach(displayComment);

  // Clear input fields
  nameInput.value = "";
  commentInput.value = "";
});

// Function to display a single comment on the page
function displayComment(comment) {
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  const commentLeft = document.createElement("div");
  commentLeft.classList.add("comment__left");
  commentElement.appendChild(commentLeft);

  const commentImage = document.createElement("img");
  commentImage.classList.add("item__left");
  commentImage.setAttribute("src", "/Photo-gallery-3.jpg");
  commentLeft.appendChild(commentImage);

  const commentRight = document.createElement("div");
  commentRight.classList.add("comment__right");
  // commentRight.classList.add("item-right");
  commentElement.appendChild(commentRight);

  const commentItem = document.createElement("div");
  commentItem.classList.add("item__container");
  commentItem.classList.add("item__right");
  commentRight.appendChild(commentItem);

  const nameElement = document.createElement("p");
  nameElement.textContent = comment.name;
  commentItem.appendChild(nameElement);

  const dateElement = document.createElement("p");
  dateElement.classList.add("comment__date");
  dateElement.textContent = comment.date.toDateString();
  commentItem.appendChild(dateElement);

  const commentTextElement = document.createElement("p");
  commentTextElement.textContent = comment.comment;
  commentRight.appendChild(commentTextElement);

  commentList.appendChild(commentElement);
}
