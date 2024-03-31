import * as THREE from 'three';

export class CharacterPortraitRenderer {
    public scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private canvas: HTMLElement;
    private cam: THREE.PerspectiveCamera;
    constructor(canvas: HTMLElement, background: THREE.Color) 
    {
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        this.canvas.appendChild(this.renderer.domElement);
        this.cam = new THREE.PerspectiveCamera(
            75,
            canvas.offsetWidth / canvas.offsetHeight,
            0.1,
            1000
        );
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        this.cam.position.set(0, 1.5, 2);
        this.scene.add(this.cam);
        this.scene.background = background;
        this.scene.fog = new THREE.Fog(background, 0, 75);
        this.scene.add(ambientLight);
    }
    public ReSize() {
        this.cam.aspect = this.canvas.offsetWidth / this.canvas.offsetHeight;
        this.cam.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
    }

    public Render() {
        this.renderer.render(this.scene, this.cam);
    }

    public SubscribeToResize() {
        window.addEventListener('resize', () => {
            this.ReSize();
        });
    }
    public UnsubscribeToResize() {
        window.removeEventListener('resize', () => {
            this.ReSize();
        });
    }
        
}