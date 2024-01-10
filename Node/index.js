console.log("Hello world")
const {Demo,name}=require("./Demo.js")
const osfunction=require("./osmodule.js")
const PathFunction=require("./pathmodule")
// above is the user defined module
// const {Demo,Demo2}=require("./Demo.js")
// for multiple import
console.log(1+2+3)
Demo()
console.log(name)
osfunction()
PathFunction()