const addHistory = (title, viewCount) => {
  const historyDiv = document.getElementById("history");

  const newHistory = document.createElement("li");
  newHistory.classList = "my-2";
  newHistory.innerHTML = `
    <div class="bg-[#FFFFFF] rounded-md p-2 lg:p-4 flex justify-between">
    <h4 class="w-3/4" id="mark-title">${title}</h4>
    <div class="view flex gap-[1px] text-base text-[#12132D99] items-center">
      <img class="h-5" src="./images/view.png" alt="">
      <h4 class="w-1/4 text-xs">${viewCount}</h4>
    </div>
  </div>
    `;
  historyDiv.append(newHistory);
};
