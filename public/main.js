{
  // dark
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

// console.log(
//   `${new Date().getFullYear()}-${
//     new Date().getMonth() + 1
//   }-${new Date().getDay()}`
// );
