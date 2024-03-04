const loadPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data["posts"];
  displayPost(posts);
};

const displayPost = (posts) => {
  const postContainer = document.getElementById("post-container");

  posts.forEach((post) => {
    console.log(post);

    const postCard = document.createElement("div");
    postCard.classList =
      "single-card py-6 rounded-lg w-full bg-[#F3F3F5] flex justify-between font-inter";
    postCard.innerHTML = `
    <!-- profile-pic -->
    <div class="pl-1 md:pl-4 pro-pic relative rounded-md">
      <img class="w-24 md:w-12 h-12 rounded-md" src="${post["image"]}" alt="">
      <div class="online absolute -right-1 -top-1 ${
        post["isActive"] ? "bg-green-500" : "bg-red-600"
      } rounded-full h-2 w-2" ></div>
    </div>
    
    <!-- post-info -->
    <div class="mx-4 pb-4 post-info flex flex-col gap-1 w-full">
      <!-- hashtag -->
      <div class="hashtag flex gap-4 text-xs xl:text-base font-semibold">
        <p>#<span> ${post["category"]}</span></p>
        <p>Author: <span>${post["author"]["name"]}</span></p>
      </div>
      <!-- title -->
      <h2 class="font-extrabold font-mulish xl:text-2xl">${post["title"]}</h2>
      <!-- blog -->
      <p class="text-xs mb-2 xl:text-lg">${post["description"]}</p>

      <!-- like-comment -->
      <div class="flex justify-between border-t border-dashed border-[#12132D40] pt-2">                
        <div class="like-cmnt flex gap-4">
          <div class="comment flex items-center gap-1 text-[rgba(18,19,45,0.6)]">
            <img class="h-4" src="./images/comment.png" alt="">
            <p class="text-sm">${post["comment_count"]}</p>
          </div>

          <div class="comment flex items-center gap-1 text-[rgba(18,19,45,0.6)]">
            <img class="h-4" src="./images/view.png" alt="">
            <p class="text-sm">${post["view_count"]}</p>
          </div>

          <div class="comment flex items-center gap-1 text-[rgba(18,19,45,0.6)]">
            <img class="h-4" src="./images/timer.png" alt="">
            <p class="text-sm">${post["posted_time"]} min</p>
          </div>
        </div>

        <!-- mark-btn -->
        <button class="cursor-pointer"><img class="h-5 " src="./images/add-box.png" alt=""></button>
      </div>
    </div>
    `;

    postContainer.append(postCard);
  });
};

loadPost();
