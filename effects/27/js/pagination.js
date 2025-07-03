const paginationFn = (dir, page, murkup) => {
  const pagination_inner = document.querySelector(".pagination_inner");
  if (!!murkup) {
    pagination_inner.innerHTML = `
        <span class="pagination">${page}</span>
        <span class="pagination">${page}</span>
        <span class="pagination">${page}</span>
        <span class="pagination big">${page}</span>
        <span class="pagination">${page}</span>
        <span class="pagination">${page}</span>
        <span class="pagination">${page}</span>
      `;
    const big = document.querySelector(".big");
    const paginationItem = document.querySelectorAll(".pagination");
    paginationItem.forEach((item) => {
      item.style.transform = `scale(${1})`;
    });
    return;
  }
  const pagination = document.querySelectorAll(".pagination");
  // ---------
  pagination.forEach((item, idx) => {
    item.innerHTML = page;
  });
  // // ----------дія при нажиманні на кнопку
  // const arrState = [1, 2, 3, 4, 5, 6, 7];
  // pagination.forEach((item, idx) => {
  //   item.innerHTML = page;
  //   if (arrState[idx] === 1) {
  //     if (dir === "left") {
  //       item.style.transition = "none";
  //       item.style.right = 0;
  //       item.style.left = "auto";
  //       arrState[idx] = 7;
  //       item.classList.remove("big");
  //     } else {
  //       item.style.transition = "left .3s linear";
  //       item.style.right = "auto";
  //       item.style.left = "14.29%";
  //       arrState[idx] = 2;
  //       item.classList.remove("big");
  //     }
  //   } else if (arrState[idx] === 2) {
  //     if (dir === "left") {
  //       item.style.transition = "left .3s linear";
  //       item.style.right = "auto";
  //       item.style.left = 0;
  //       arrState[idx] = 1;
  //       item.classList.remove("big");
  //     } else {
  //       item.style.transition = "left .3s linear";
  //       item.style.right = "auto";
  //       item.style.left = "calc(14.29% * 2)";
  //       arrState[idx] = 3;
  //       item.classList.remove("big");
  //     }
  //   } else if (arrState[idx] === 3) {
  //     if (dir === "left") {
  //       item.style.transition = "left .3s linear";
  //       item.style.right = "auto";
  //       item.style.left = "14.29%";
  //       arrState[idx] = 2;
  //       item.classList.remove("big");
  //     } else {
  //       item.style.transition = "left .3s linear, transform .3s linear";
  //       item.style.right = "0";
  //       item.style.left = "0";
  //       item.style.margin = "auto";
  //       arrState[idx] = 4;
  //       item.classList.add("big");
  //     }
  //   } else if (arrState[idx] === 4) {
  //     if (dir === "left") {
  //       item.style.transition = "left .3s linear, transform .3s linear";
  //       item.style.right = "auto";
  //       item.style.left = "calc(14.29% * 2)";
  //       item.style.margin = "auto";
  //       arrState[idx] = 3;
  //       item.classList.remove("big");
  //     } else {
  //       item.style.transition = "left .3s linear, transform .3s linear";
  //       item.style.right = "auto";
  //       item.style.left = "calc(13.29% * 5)";
  //       item.style.margin = "auto";
  //       arrState[idx] = 5;
  //       item.classList.remove("big");
  //     }
  //   } else if (arrState[idx] === 5) {
  //     if (dir === "left") {
  //       item.style.transition = "left .3s linear, transform .3s linear";
  //       item.style.right = "0";
  //       item.style.left = "0";
  //       item.style.margin = "auto";
  //       arrState[idx] = 4;
  //       item.classList.add("big");
  //     } else {
  //       item.style.transition = "left .3s linear";
  //       item.style.right = "auto";
  //       item.style.left = "calc(13.29% * 6)";
  //       arrState[idx] = 6;
  //       item.classList.remove("big");
  //     }
  //   } else if (arrState[idx] === 6) {
  //     if (dir === "left") {
  //       item.style.transition = "left .3s linear";
  //       item.style.right = "auto";
  //       item.style.left = "calc(13.29% * 5)";
  //       arrState[idx] = 5;
  //       item.classList.remove("big");
  //     } else {
  //       item.style.transition = "none";
  //       item.style.right = 0;
  //       item.style.left = "auto";
  //       arrState[idx] = 7;
  //       item.classList.remove("big");
  //     }
  //   } else if (arrState[idx] === 7) {
  //     if (dir === "left") {
  //       item.style.transition = "left .3s linear";
  //       item.style.right = "auto";
  //       item.style.left = "calc(13.29% * 6)";
  //       arrState[idx] = 6;
  //       item.classList.remove("big");
  //     } else {
  //       item.style.transition = "none";
  //       item.style.right = "auto";
  //       item.style.left = 0;
  //       arrState[idx] = 1;
  //       item.classList.remove("big");
  //     }
  //   }
  // });
};
export default paginationFn;
