// text method returns promise
// if resolve will return text representation of body

// fetch("text.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// Fetch API promise only rejects when we have network error (not in other cases).

// const res = document.querySelector(".results");

// async function renderData() {
//   try {
//     const response = await fetch("text.txt");
//     if(!response.ok) throw Error (response.statusText)
//     const data = await response.text();
//     res.textContent = data;
//     console.log(data);
//   } catch(e) {
//     console.log(e);
//   }
// }
// renderData();

// JSON DATA FETCHING

// const res = document.querySelector(".results");

// async function renderData() {
//   try {
//     const response = await fetch("data.json");
//     if (!response.ok) throw Error(response.statusText);
//     const data = await response.json();
//     console.log(data);
//     res.textContent = data.name;
//   } catch (error) {
//     console.log(error);
//   }
// }
// renderData();

// EXTERNAL APIS
const btn = document.querySelector(".btn");
btn.addEventListener("click", makeRequest);

function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) new Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      //   console.log(data.id);
      //   console.log(data.title);
      //   document.querySelector(".id").innerHTML = data.id;
      //   document.querySelector(".title").innerHTML = data.title;
      //   document.querySelector(".body").innerHTML = data.body;
      let output = document.querySelector(".results");
      data.forEach((element) => {
        output.innerHTML += `
                <div>(ID): ${element.id}</div>
                <div>(TITLE): ${element.title}</div>
                <div>(BODY): ${element.body}</div>
            `;
      });
    })
    .catch((error) => console.log(error));
}

