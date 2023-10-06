import * as THREE from 'three';
import { controls } from './main';

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = true;
let direction = new THREE.Vector3();
const velocity = new THREE.Vector3();
const onKeyDown = function (event) {
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            moveForward = true;
            autoRun = false;
            break;
        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = true;
            autoRun = false;
            break;
        case 'ArrowDown':
        case 'KeyS':
            moveBackward = true;
            autoRun = false;
            break;
        case 'ArrowRight':
        case 'KeyD':
            moveRight = true;
            autoRun = false;
            break;
        case 'Space':
            Jump();
            break;
    }
};
const onKeyUp = function (event) {
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
            moveForward = false;
            break;
        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = false;
            break;
        case 'ArrowDown':
        case 'KeyS':
            moveBackward = false;
            break;
        case 'ArrowRight':
        case 'KeyD':
            moveRight = false;
            break;
    }
};
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

let autoRun = false;
document.addEventListener('mousedown', function (event) {
    if (event.button === 0 && controls.isLocked) {
        controls.unlock();
    }
    else if (event.button === 1) {
        autoRun = !autoRun;
    } else if (event.button === 2) {
        Jump();
    }
})


function Jump() {
    if (canJump === true)
        velocity.y += 40;
    canJump = false;
}

export function Move(delta) {

    const decAccSpeed = 10 * delta;
    velocity.x -= velocity.x * decAccSpeed;
    velocity.z -= velocity.z * decAccSpeed;

    velocity.y -= 9.8 * decAccSpeed;

    direction.z = Number(moveForward || autoRun) - Number(moveBackward);
    direction.x = Number(moveLeft) - Number(moveRight);
    direction.normalize();

    const accSpeed = 60 * delta;
    if (moveForward || moveBackward || autoRun) 
        velocity.z -= direction.z * accSpeed;
    if (moveLeft || moveRight)
        velocity.x -= direction.x * accSpeed;

    // Move the player forard/backward/left/right
    controls.moveRight(velocity.x * delta);
    controls.moveForward(-velocity.z * delta);

    // Move the player up/down
    controls.getObject().position.y += (velocity.y * delta);
    if (controls.getObject().position.y < 0) {
        velocity.y = 0;
        controls.getObject().position.y = 0;
        canJump = true;
    }
}
