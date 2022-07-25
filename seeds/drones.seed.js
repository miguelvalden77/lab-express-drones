// Iteration #1
require("../db")
const mongoose = require("mongoose")

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

const Drone = require("../models/Drone.model")

const insertDrones = async ()=>{

    try{
        await Drone.insertMany(drones)
        console.log("Los drones están el la database")
        mongoose.disconnect()
    }
    catch(error){
        console.log(error)
    }

}

insertDrones()
