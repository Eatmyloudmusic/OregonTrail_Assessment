class Traveler {
    constructor(name = "", food = 1, isHealthy = true) {
        this.name = name
        this.food = food
        this.isHealthy = true
    }
    hunt () {
        this.food += 2
    }
    eat () {
        this.food -= 1
        if (this.food = 0){
            this.isHealthy = false
        }
    }

}
class Wagon {
    constructor(capacity, passengers = []) {
        this.capacity = 10
        this.passengers = []
    }
    getAvailableSeatCount (){

        return numberOfEmptySeats - numberOfPassengers 
    }
    join () {
        if (this.capacity = 0) {
            console.log("The wagon is full, pilgrim. Best wait fer another.")
        } else {
            this.capacity -= 1
        }
    }
    shouldQuarantine () {
        if (isHealthy = false){
            return true
        } else {
            return false
        }
    }
    totalFood () {
        ::make array of passengers and their food. add food.
        let allFood = "array of food added together."
        return allFood
    }
}