const selection = document.querySelector(".selection");
if (selection) {

  const tabs = selection.querySelectorAll("[data-tab]");
  const types = selection.querySelectorAll("[data-type]");

  const largeTabs = selection.querySelectorAll(".selection__tabs-large li");
  largeTabs[0].classList.add('js-tab-active');
  largeTabs.forEach(largeTab => {
    largeTab.addEventListener("click", () => {
      largeTabs.forEach(tab => tab.classList.remove('js-tab-active'));
      largeTab.classList.add('js-tab-active');
    });
  });


  types.forEach(type => type.classList.add('js-hidden'));
  types[0].classList.remove('js-hidden');
  tabs[0].classList.add('js-tab-active');

  tabs.forEach(tab => {
    const dataTab = tab.dataset.tab;
    tab.addEventListener("click", () => {
      tabs.forEach(tab => tab.classList.remove('js-tab-active'));
      types.forEach(type => {
        const dataType = type.dataset.type;
        if (dataTab === dataType) {
          tab.classList.add('js-tab-active');
          type.classList.remove('js-hidden');
        } else {
          type.classList.add('js-hidden');
        }
      });
    });
  });
}
