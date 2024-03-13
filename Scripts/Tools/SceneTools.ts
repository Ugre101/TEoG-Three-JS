import * as THREE from 'three';

export class CreateCharacterScene {
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private canvas: HTMLCanvasElement;
    private cam: THREE.PerspectiveCamera;
    constructor(canvas: HTMLCanvasElement, background: THREE.Color) 
    {
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        this.cam = new THREE.PerspectiveCamera(
            75,
            canvas.offsetWidth / canvas.offsetHeight,
            0.1,
            1000
        );
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(this.cam);
        this.scene.background = background;
        this.scene.fog = new THREE.Fog(background, 0, 75);
        this.scene.add(ambientLight);
    }
    ReSize() {
        this.cam.aspect = this.canvas.offsetWidth / this.canvas.offsetHeight;
        this.cam.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
    }
}