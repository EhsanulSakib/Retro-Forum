const searchPost = () =>{
    const postContainer = document.getElementById("post-container");
    const search = document.getElementById("search");
    const searchInput = search.value.toLowerCase();
    postContainer.innerText=``;
    loading()
    setTimeout(() => {
      loadPost(searchInput)
    }, 2000);
}
  
  
  
  

const loading = () =>{
    const postContainer = document.getElementById("post-container");
    const loading = document.createElement('div');

    loading.classList = "px-32 md:px-44 lg:px-56 w-full"
    loading.innerHTML = `
    <span class="loading loading-dots loading-lg"></span>
    `;
    postContainer.append(loading)
}