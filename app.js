let ekle = document.querySelector("#ekle");
let toDo = document.querySelector("#todo");
let toDos = document.querySelector("#todos");
let main = document.querySelector(".main");
let ul = document.createElement("ul");
let isClick = false;
toDos.appendChild(ul);

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("eklee")) {
    if (!toDo.value) {
      alert("please write something ");
    } else {
      ul.innerHTML += `<li id=" tod" class="tod" ><i class=" check fa-solid fa-check"></i>
            <p> ${toDo.value}</p> <i class=" delete fa-solid fa-xmark"></i> </li>`;
      toDo.value = "";
    }
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("check")) {
    if (isClick == false) {
      isClick = true;
      console.log(isClick);
      e.target.nextElementSibling.style.textDecoration = "line-through";
      e.target.nextElementSibling.style.textDecorationColor = "rgb(39, 39, 39)";
      e.target.style.color="rgb(78, 78, 78)"
    } else if ((isClick = true)) {
      isClick = false;
      console.log(isClick);
      e.target.nextElementSibling.style = "";
      e.target.style="gray"
    }
  }
});


