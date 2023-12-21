const typeBlocks = document.querySelectorAll(".type");
if (typeBlocks) {

  typeBlocks.forEach(typeBlock => {
    const moreBtn = typeBlock.querySelector(".type-desc__btn-more");
    const typeDescTextList = typeBlock.querySelectorAll("li.type-desc__text");

    moreBtn.addEventListener("click", () => {
      typeDescTextList.forEach(text => {
        text.classList.add("js-visible");
      });
    });
  });

}