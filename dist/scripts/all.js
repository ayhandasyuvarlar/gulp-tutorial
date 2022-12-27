//all.js
const count = (o) => {
  console.log(Number(o) + 1);
};
count(1);
function greet(e) {
  null != e ? console.log("Welcome " + e) : console.log("enter string value");
}
const fullName = "ayhan";
greet(fullName);
