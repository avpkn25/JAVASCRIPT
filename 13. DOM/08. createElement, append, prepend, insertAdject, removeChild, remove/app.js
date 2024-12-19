// ------------------------------------
// createElement()
// appendChild()
// insertBefore()
// append()
// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

// Creating Element
// const h1 = document.createElement("h1");
// console.log(h1);
// h1.textContent = "Hello World";
// console.log(h1.textContent);

// // h1.classList.add("greetings")
// // console.log(h1);

// append Child
// const body = document.body
// body.appendChild(h1) // append at the bottom of the list

// const ul = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.innerText = "I am li tag";
// ul.append(newLi);

// // selector.insertBefore(what,where)
// const firstLi = document.querySelector("li")
// ul.insertBefore(newLi,firstLi)

// const firstP = document.querySelector("p");
// console.log(firstP.innerText);
// const i = document.createElement("i");
// i.innerText = "I am Italic text";
// i.style.color = "skyblue";

// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterend", i);

// let section = document.querySelector("section");
// const i = document.createElement("i");
// i.innerText = "I am Italic text";
// i.style.color = "skyblue";
// const h4 = document.createElement("h4");
// h4.innerText = "I am Praveen";
// h4.style.color = "grey";
// section.append(i);
// section.append(h4);
// section.prepend(i);
// section.prepend(h4);

// const newList = document.querySelector(".new-list");
// const fourth = document.querySelector(".fourth");
// newList.removeChild(fourth);
// newList.remove();

