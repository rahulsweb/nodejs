let obj={
    name:"rahul",
    age:29,
    gender:"male"
}
const obj1=["rahul","sagar"]
const arr={...obj};
const arr1=obj;
const arr2={obj};
console.log("first",arr);
console.log("sec",arr1);
console.log("third",arr2);