// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
   
    constructor(name, topSpeed){
        this.name = name        
        this.topSpeed = topSpeed
    }
    
    accelerate() {
        const {name, topSpeed} = this
        console.log(`${name} moving to ${topSpeed}`)
    }

}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const battlestar = new SpaceShip("Battlestar Galactica", "1,680,000 FTL")
const tardis = new  SpaceShip("TARDIS", "10,000,000,000,000,000 FTL")
console.log(tardis.accelerate())
console.log(battlestar.accelerate())