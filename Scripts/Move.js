import * as THREE from "three";
import {controls} from "../main.js";

let moveForward = false,
    moveBackward = false;
let moveLeft = false,
    moveRight = false;
let canJump = true;
let sprinting = false;
const direction = new THREE.Vector3();
const velocity = new THREE.Vector3();
const onKeyDown = function (event) {
    switch (event.code) {
        case "ArrowUp":
        case "KeyW":
            moveForward = true;
            autoRun = false;
            break;
        case "ArrowLeft":
        case "KeyA":
            moveLeft = true;
            autoRun = false;
            break;
        case "ArrowDown":
        case "KeyS":
            moveBackward = true;
            autoRun = false;
            break;
        case "ArrowRight":
        case "KeyD":
            moveRight = true;
            autoRun = false;
            break;
        case "Space":
            Jump();
            break;
        case "ShiftLeft":
            sprinting = true;
            break;
    }
};
const onKeyUp = function (event) {
    switch (event.code) {
        case "ArrowUp":
        case "KeyW":
            moveForward = false;
            break;
        case "ArrowLeft":
        case "KeyA":
            moveLeft = false;
            break;
        case "ArrowDown":
        case "KeyS":
            moveBackward = false;
            break;
        case "ArrowRight":
        case "KeyD":
            moveRight = false;
            break;
        case "ShiftLeft":
            sprinting = false;
            break;
    }
};
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

let autoRun = false;
document.addEventListener("mousedown", function (event) {
    if (event.button === 0 && controls.isLocked) {
        controls.unlock();
        autoRun = false;
    } else if (event.button === 1) {
        autoRun = !autoRun;
    } else if (event.button === 2) {
        Jump();
    }
});

function Jump() {
    if (canJump === true) velocity.y += 50;
    canJump = false;
}

export function playerCollisions(intractables) {
    intractables.forEach(intractable => {
        let distanceTo = controls.getObject()
            .position.distanceTo(intractable.obj.position);
        if (distanceTo < 2)
            intractable.interact();
    });
}

export function Move(delta) {
    const decAccSpeed = 10 * delta;
    velocity.x -= velocity.x * decAccSpeed;
    velocity.z -= velocity.z * decAccSpeed;

    velocity.y -= 9.8 * decAccSpeed;

    direction.z = Number(moveForward || autoRun) - Number(moveBackward);
    direction.x = Number(moveLeft) - Number(moveRight);
    direction.normalize();

    let accSpeed = 200 * delta;
    if (sprinting) accSpeed *= 2;

    if (moveForward || moveBackward || autoRun)
        velocity.z -= direction.z * accSpeed;
    if (moveLeft || moveRight) velocity.x -= direction.x * accSpeed;

    // Move the player forard/backward/left/right
    controls.moveRight(velocity.x * delta);
    controls.moveForward(-velocity.z * delta);

    // Move the player up/down

    controls.getObject().position.y += velocity.y * delta;
    if (controls.getObject().position.y < 0.5) {
        velocity.y = 0.5;
        controls.getObject().position.y = 0.5;
        canJump = true;
    }

}
