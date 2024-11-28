const {names}= require("./arr")
const {v4 : uuid} = require("uuid")
const {format} = require("date-fns")



const objarr = names.map(nawobj=>({
    "name":nawobj,
    "id" : uuid(),
    "date" : format(new Date(),"yyyy-MM-dd hh:mm:ss") 
    

}))
console.log(objarr)
console.log("Count:" + names.length )



