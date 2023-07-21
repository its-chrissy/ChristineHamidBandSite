let comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic  expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Connor Walton2",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic  expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Connor Walton3",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic  expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];
let parentEl = document.querySelector(".comments__box");

const displayComments = () => {
  console.log(comments);

  // Show all the default comments

  // Step 1 : Get the parent element class="comments__box">

  // Step 2 : Create comment__item for no. of comments
  let commentItem = "";
  comments.forEach((comment) => {
    let commentItem = document.createElement("div"); // -- parent
    commentItem.classList.add("comments__item");

    let commentItemImg = document.createElement("div");
    commentItemImg.classList.add("comments__item--img");

    // Create img
    let img = document.createElement("img");
    img.src = "./assets/Images/grey_image.jpg";
    commentItemImg.appendChild(img);

    let commentNameDate = document.createElement("div");
    commentNameDate.classList.add("comments__namedate");

    // Create 2 div elements
    let commentName = document.createElement("div");
    commentName.classList.add("comments__name");
    commentName.innerHTML = comment.name;

    let commentDate = document.createElement("div");
    commentDate.classList.add("comments__date");
    commentDate.innerHTML = comment.date;

    commentNameDate.appendChild(commentName);
    commentNameDate.appendChild(commentDate);

    let commentContent = document.createElement("div");
    commentContent.classList.add("comments__content");
    //create a p
    let commentPara = document.createElement("p");
    commentPara.innerHTML = comment.comment;
    commentContent.appendChild(commentPara);

    commentItem.appendChild(commentItemImg);
    commentItem.appendChild(commentNameDate);
    commentItem.appendChild(commentContent);

    // Step 3: Append comment__items inside the parent
    parentEl.appendChild(commentItem);
  });
};

// Add the new comment at the beginning of the array (newest at the top)
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector(".textarea_name").value;
  const date = new Date();
  const comment = document.querySelector(".textarea_comment").value;

  if (name && comment) {
    const newComment = {
      name: name,
      date: formatDate(date),
      comment: comment,
    };

    comments.unshift(newComment);
    parentEl.innerText = "";
    displayComments();
    clearInput();
  }
});

// Function to format the date as "month/day/year"
const formatDate = (date) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

// Function to clear input fields
const clearInput = () => {
  document.querySelector(".textarea_name").value = "";
  document.querySelector(".textarea_comment").value = "";
};

// Display the default comments when the page loads
displayComments();
