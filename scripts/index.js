let comments = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic  expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Connor Walton2",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic  expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Connor Walton3",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic  expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

const displayComments = () => {
  console.log(comments);
 
  // Show all the default comments

  /*

     -- Parent
            <div class="comments__item">
              <div class="comments__item--img"> 
                 <img src="./assets/Images/grey_image.jpg"/> 
              
              </div>

              <div class="comments__namedate">
                <div class="comments__name">Connor Walton</div>
                <div class="comments__date">02/17/2021</div>
              </div>
              
              <div class="comments__content">
                <p>This is art. This is inexplicable magic 
                  expressed in the purest way, everything 
                  that makes up this majestic work 
                  deserves reverence. Let us appreciate 
                  this for what it is and what it contains.
                
                </p>
              </div>
            
            </div>
  */
  // Step 1 : Get the parent element class="comments__box">
  let parentEl = document.querySelector(".comments__box");

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
    commentDate.innerHTML = comment.timestamp;

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

function postComment() => {
  console.log();
  // Copy the code from 58-96
  let postComment="";
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
    commentName.innerHTML = // Form .name;

    let commentDate = document.createElement("div");
    commentDate.classList.add("comments__date");
    commentDate.innerHTML = // Auto generate;

    commentNameDate.appendChild(commentName);

    let commentContent = document.createElement("div");
    commentContent.classList.add("comments__content");
    //create a p
    let commentPara = document.createElement("p");
    commentPara.innerHTML = // From commetn;
    commentContent.appendChild(commentPara);

    commentItem.appendChild(commentItemImg);
    commentItem.appendChild(commentNameDate);
    commentItem.appendChild(commentContent);

     // Step 3: Append comment__items inside the parent
     parentEl.appendChild(commentItem);
});
}

displayComments();
