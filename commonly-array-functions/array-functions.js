// push 
// map 
// find 
// filter 
// some 
// every 
// includes

const users = ["Kemal","Abdullah","Ongun"];
const student = [
    {
        name:"ali",
        cinsiyet:"Erkek",
        yas:14,
    },

    {
        name:"Sertac",
        cinsiyet:"Erkek",
        yas:14,
    },

    {
        name:"İrem",
        cinsiyet:"Kiz",
        yas:14,

    },

    {
        name:"İrem",
        cinsiyet:"Kiz",
        yas:15,
    },

]


//Dizinin sonuna eleman ekler...
// users.push("Ahmet");
// console.log(users);

//Dizini bütün elemanlarını döner...
// users.map((item) => {
//     console.log(item);
// })

//Objenin Cinsiyet özelliğini döner...
// student.map((item) => {
//     console.log(item.cinsiyet);
// })

//Dizinin içerisinde verdiğimiz koşullarla arama yapar.
// const result = student.find((item) => item.name === "İrem" && item.yas > 14);
// console.log(result);

// filtreleme yapar...
// const filtered = student.filter((item) => item.cinsiyet === "Erkek");
// console.log(filtered);

// verdiğimiz şartlara uyarsa true uymazssa false döner...
// const some = student.some((item) => item.yas === 15);
// console.log(some);

//verdiğimiz şartların hepsine uyarsa true uymazssa false döner...
// const every = student.every((item) => item.yas === 14);
// console.log(every);


//includes dizinin içerisinde elemanın olup olmadığını true veya false döner...
// const includesFalse = users.includes("ahmet");
// console.log(includesFalse)

// const includesTrue = users.includes("Kemal");
// console.log(includesTrue)