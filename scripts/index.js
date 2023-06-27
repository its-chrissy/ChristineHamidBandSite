const displayComment = () => {
  let textbox1Elemnts = document.querySelectorAll(".join-textbox1");
  for (const element of textbox1Elemnts) {
    element.innerHTML = userProfile.username;
  }

  let textbox1ImgElement = document.querySelector(".join-textbox1__img");
  textbox1ImgElement.src = userProfile.profilePicture;

  let textbox1Name = document.querySelector(".join-textbox1__name");
  textbox1Name.innerHTML = userProfile.jobTitle;

  let textbox1Comment = document.querySelector(".join-textbox1__comment");
  textbox1Comment.innerHTML = userProfile.jobTitle;
};

function postComment() {
  // Get the  text from the post text box
  let userCommentText = document.querySelector(".data-comment-text").value;
  console.log(userCommentText);

  // take input
  // create Element
  /**
 
<div class="comments__item">
            <div class="comments__item--img"> <img src="." />
            </div>
                        <div class="comments__name">Miles Acosta</div>
                        <div class="comments__content">
                            <p>
                                your text
                            </p>
                        </div>
                    </div>
**/
  // <div class="textbox__comment-btn">
  //		<button onclick="postComment();">COMMENT</button>
  //	</div>
  let postComment = document.createElement("div");
  postComment.classList.add("comments__item");

  let postCommentName = document.createElement("div");
  postCommentName.classList.add("comments__name");
  postUserName.innerHTML = `${userProfile.username} Posted`;

  let postContent = document.createElement("div");
  postContent.classList.add("comments__content");

  let postContentPar = document.createElement("p");
  postContentPar.innerHTML = userPostText;

  let postcommentDiv = document.createElement("div");
  postcommentDiv.classList.add("textbox__comment-btn");

  let postBtn = document.createElement("button");
  postBtn.innerHTML = "COMMENT";

  // append this new post component to the post container class post
  postComment.appendChild(postCommentName);
  postComment.appendChild(postContent);
  postComment.appendChild(postlikeDiv);

  postContent.appendChild(postContentPar);

  postlikeDiv.appendChild(textbox__comment - btn);

  document.querySelector(".comments").prepend(postComment);
}

// Function calls
displayComment();
