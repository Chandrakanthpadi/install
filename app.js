const search = document.querySelector(".search");
const links = document.querySelectorAll(".card");

search.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  links.forEach((item) => {
    if (item.innerHTML.toLowerCase().indexOf(term) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});
