function greet(fullName) {
  if (fullName !== null) {
    console.log(`Welcome ${fullName}`);
  } else {
    console.log("enter string value");
  }
}
const fullName = "ayhan";
greet(fullName);
