import { Building, BuildingData } from "./Building";

export const Gym = new Building(new BuildingData("Gym", 0), "A place where your followers train their bodies to gain muscle or lose fat");
Gym.tick = function (ticks, dormMates) {
    console.log("Gym tick");
    dormMates.forEach(dormMate => {
        
    });
}