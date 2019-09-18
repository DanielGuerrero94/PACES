var fs = require('fs')

const json = fs.readFileSync("areas.json")
areas = JSON.parse(json)
console.log(areas)
    

