// let comments = [
//   {
//     name: "Connor Walton",
//     date: "02/17/2021",
//     comment:
//       "This is art. This is inexplicable magic  expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//     image: "./assets/Images/face2.jpg",
//   },
//   {
//     name: "Emilie Beach",
//     date: "01/09/2021",
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What incredible day.",
//     image: "./assets/Images/face1.jpg",
//   },
//   {
//     name: "Miles Acosta",
//     date: "12/20/2021",
//     comment:
//       "I can t stop listening. Every time I hearone of their songs - the vocals - it gives me goosebumps. Shivers straight downmy spine. What a beautiful expression of creativity. Can t get enough.",
//     image: "./assets/Images/face2.jpg",
//   },
// ];
let parentEl = document.querySelector(".comments__box");
let comments = [];

const displayComments = (comments) => {
  parentEl.innerHTML = "";

  comments.forEach((comment) => {
    let commentItem = document.createElement("div"); // -- parent
    commentItem.classList.add("comments__item");

    let commentItemImg = document.createElement("div");
    commentItemImg.classList.add("comments__item--img");

    // Create img
    let img = document.createElement("img");
    img.src = comment.image;
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

const getComments = () => {
  const apiUrl =
    "https://project-1-api.herokuapp.com/comments?api_key=d6bfb720-74e1-440f-a299-cef7d6ca1c6e";

  axios
    .get(apiUrl)
    .then((response) => {
      comments = response.data;
      displayComments(comments);
    })
    .catch((error) => {
      console.log(error);
    });
};

getComments();

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
      image: "./assets/Images/face3.jpg",
    };

    axios
      .post(
        "https://project-1-api.herokuapp.com/comments?api_key=d6bfb720-74e1-440f-a299-cef7d6ca1c6e",
        newComment
      )
      .then((response) => {
        const createdComment = response.data;
        comments.unshift(createdComment); // Add the new comment to the beginning of the array
        parentEl.innerHTML = "";
        displayComments(comments); // Pass the updated comments array to display
        clearInput();
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

//     comments.unshift(newComment);
//     parentEl.innerText = "";
//     displayComments();
//     clearInput();
//   }
// });

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
// displayComments();
