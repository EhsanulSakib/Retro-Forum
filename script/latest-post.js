const loadLatestPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  const latestPosts = data;
  displayLatestPost(latestPosts);
};

const displayLatestPost = (latestPosts) => {
  const latestPostContainer = document.getElementById("latest-post-container");

  latestPosts.forEach((latestPost) => {
    const latestPostCard = document.createElement("div");
    latestPostCard.classList = "card w-full bg-base-100 shadow-xl";
    latestPostCard.innerHTML = `
    <figure class="px-5 pt-10">
    <img src="${latestPost["cover_image"]}" alt="Post" class="rounded-lg" />
  </figure>
  <div class="card-body items-left gap-1 lg:gap-2 text-left">
    <!-- date -->
    <div class="date flex items-center gap-1 text-sm lg:text-lg text-[#12132D99] ">
      <img class="h-5" src="./images/calender.png" alt="">
      <p>${
        latestPost["author"]["posted_date"]
          ? latestPost["author"]["posted_date"]
          : "No publish date"
      }</p>
    </div>
    <h2 class="card-title text-[--dark-01] text-base lg:text-xl xl:text-2xl font-bold">${
      latestPost["title"]
    }</h2>
    <p class="text-xs lg:text-base xl:text-xl">${latestPost["description"]}</p>
    
    <div class="mt-4 author flex gap-4 ">
      <img class="h-12 w-12 rounded-full" src="${
        latestPost["profile_image"]
      }" alt="">

      <div class="name text-[--dark-01]">
        <h3 class="font-bold xl:text-xl">${latestPost["author"]["name"]}</h3>
        <p class="text-sm text-[#12132D99] xl:text-lg">${
          latestPost["author"]["designation"]
            ? latestPost["author"]["designation"]
            : "Unknown"
        }</p>
      </div>
    </div>
  </div>
      `;

    latestPostContainer.append(latestPostCard);
  });
};

loadLatestPost();
