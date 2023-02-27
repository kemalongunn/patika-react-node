
import hello, {collect, subs }  from "./my-module.js";
import slugify from "slugify";

const title = slugify("Kemal Abdullah Ongun", "-");

console.log(title);
hello("ongun");
console.log(collect(1,1));
console.log(subs(1,1));