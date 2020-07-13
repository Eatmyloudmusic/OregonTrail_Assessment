// let totalFoodVar = 0
class Traveler {
    constructor(name, food, isHealthy) {
        this.name = name
        this.food = 1
        this.isHealthy = true
        
        
    }
    hunt () {
        // Wagon.totalFood += 
        this.food += 2
        console.log("We found food, Ya'll!")
        // console.log(this.food)
    }
    eat () {
        // this.food -= 1
        if (this.food === 0) {
            this.isHealthy = false
            // console.log(this.isHealthy)
        } else {
            this.food -= 1
        }
    }

}
class Wagon {
    constructor(capacity, passengers) {
        this.capacity = 2
        this.passengers = []
    }
    //push traveller into .passengers
    getAvailableSeatCount (){
        let numberOfEmptySeats = this.capacity
        return numberOfEmptySeats 
    }
    join () {
        // let traveler = []
        // this.capacity -= 1
        console.log(this.name)

        if (this.capacity > 0) {
            // this.capacity = 0
            this.passengers.push(Traveler)
            // console.log('passerger')
            this.capacity -= 1
            }

            // console.log("Sorry, but the wagon's full, pilgrim. Best wait fer another.")
// console.log(Traveler.name)
    }
    shouldQuarantine () {
        // for (let i of this.passengers) {
            
console.log(this.isHealthy)
            if (this.isHealthy === false) {
                return true
            }
        
        return false
    }
    totalFood () {


        // for(var i = 0; i < this.passengers.length; i++){
        //     console.log(this.passengers[i]);
        // }
        // console.log(this.food)
        let allFood = 0
        for (this.food of this.passengers) {
            allFood = allFood + this.food
            

        }
        return allFood
        // ::make array of passengers and their food. add food.
        // let allFood = "array of food added together."
        // return allFood
    }
}