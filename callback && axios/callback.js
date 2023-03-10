// // 5 saniye sonra console a Hello yazar...
// setTimeout(() => {
//     console.log("Hello")
// },5000)

// Her 2 saniyede bir console a Merhaba yazdırır...
// setInterval(() => {
//     console.log("Merhaba")
// },2000)

// const sayHello = () => {
//     console.log("Say Hello")
// }

import fetch from "node-fetch";
// Sırası karışık olarak gelir çekilen veriler.

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {console.log("Users loaded",users)

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((data) => data.json())
// .then((post) => console.log("Post uploaded", post));
// }
// );

// Çekilen verilerin sırasını istediğimiz gibi verebiliriz...
// async function getData() {
//     const users = await(
//         await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.groupCollapsed("post1", post1);
//     console.groupCollapsed("post2", post2);
//     console.log("users",users);
// }
// getData();

import axios from "axios";

// //axios kullandığımız zaman jsona çevirmemize gerek kalmaz...
// async function getData() {
//     const {data: users} = await(axios("https://jsonplaceholder.typicode.com/users"));

//     const {data: post1} = await(axios("https://jsonplaceholder.typicode.com/posts/1"));

//     const {data: post2} = await(axios("https://jsonplaceholder.typicode.com/posts/2"));

//     console.groupCollapsed("post2", post2);
//     console.groupCollapsed("post1", post1);
//     console.log("users",users);
// }
// getData();

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    resolve(data);
    reject("Bir sorun oluştu");
  });
};

const getPosts = (postId) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    //resolve(data);
    reject("bir sorun daha oluştu");
  });
};

// (async () => {
//   try {
//     const users = await getUsers();

//     const posts = await getPosts(8);

//     console.log("users", users);
//     console.log("post", posts);
//   } catch (e) {
//     console.log(e);
//   }
// })();

Promise.all([getUsers, getPosts])
.then(console.log)
.catch(console.log());