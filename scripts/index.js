const apiUrl = "https://project-1-api.herokuapp.com/";
const apiKey = "4f81f939-9fb5-4ace-991c-228a92ce7b27";

// Select DOM elements
const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("review-list");
const nameInput = document.getElementById("name-input");
const commentInput = document.getElementById("comment-input");

//
let commentArray = [];

// Function to reset border color

axios
  .get(`${apiUrl}comments?api_key=${apiKey}`)
  .then((response) => {
    console.log("response", response);

    const commentData = response.data;
    console.log("data: ", commentData);

    commentData.forEach(displayComment);
    commentData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  })
  .catch((error) => {
    console.log(error);
  });

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if name is empty
  if (nameInput.value === "") {
    nameInput.style.borderColor = "#D22D2D";
  } else {
    nameInput.style.borderColor = "#E1E1E1";
  }

  // Check if comment is empty
  if (commentInput.value === "") {
    commentInput.style.borderColor = "#D22D2D";
  } else {
    commentInput.style.borderColor = "#E1E1E1";
  }

  if (nameInput.value !== "" && commentInput.value !== "") {
    const name = nameInput.value;
    console.log(name);
    const comment = commentInput.value;

    const newComment = { name, comment };

    axios
      .post(`${apiUrl}comments?api_key=${apiKey}`, newComment)
      .then((response) => {
        const addedComment = response.data;
        commentArray.unshift(addedComment);
        displayComment(addedComment);

        nameInput.value = "";
        commentInput.value = "";
        nameInput.style.borderColor = "#E1E1E1"; // reset border color
        commentInput.style.borderColor = "#E1E1E1"; // reset border color
      })

      .catch((error) => {
        console.log(error);
      });
  }
});

// Function to display a single comment on the page
function displayComment(comment) {
  const commentElement = document.createElement("li");
  commentElement.classList.add("review");

  const commentLeft = document.createElement("div");
  commentLeft.classList.add("review__left");
  commentElement.appendChild(commentLeft);

  const commentImage = document.createElement("img");
  commentImage.classList.add("element__left");
  commentLeft.appendChild(commentImage);

  const commentRight = document.createElement("div");
  commentRight.classList.add("review__right");
  commentElement.appendChild(commentRight);

  const commentItem = document.createElement("div");
  // commentItem.classList.add("comment_form");
  commentItem.classList.add("review__wrapper");
  commentRight.appendChild(commentItem);

  const nameElement = document.createElement("p");
  nameElement.textContent = comment.name;
  nameElement.classList.add("review__name");
  commentItem.appendChild(nameElement);

  const dateElement = document.createElement("p");
  dateElement.classList.add("review__date");

  const timestamp = comment.timestamp;
  const formattedDate = new Date(timestamp).toLocaleDateString();
  dateElement.textContent = formattedDate;
  commentItem.appendChild(dateElement);

  const commentTextElement = document.createElement("p");
  commentTextElement.textContent = comment.comment;
  commentRight.appendChild(commentTextElement);

  if (commentList) {
    if (commentList.childNodes.length > 0) {
      commentList.insertBefore(commentElement, commentList.childNodes[0]);
    } else {
      commentList.appendChild(commentElement);
    }
  }
}
