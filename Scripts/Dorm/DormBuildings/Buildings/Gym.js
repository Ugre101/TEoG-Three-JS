import { Building } from "./Building";

export const Gym = new Building("Gym", "A place where your followers train their bodies to gain muscle or lose fat");
Gym.tick = function (ticks, dormMates) {
    console.log("Gym tick");
    dormMates.forEach(dormMate => {
    });
}