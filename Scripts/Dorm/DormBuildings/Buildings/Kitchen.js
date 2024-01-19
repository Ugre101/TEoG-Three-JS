import { Building, BuildingData } from "./Building";


export const Kitchen = new Building(new BuildingData("Kitchen", 1), "A place where your followers eat to keep healthy or gain weight");

Kitchen.tick = function (ticks, dormMates) {
    console.log("Kitchen tick");
    dormMates.forEach(dormMate => {
    });
}
