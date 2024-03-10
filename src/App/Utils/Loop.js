import App from '../App.js'

/*This will create a loop that causes the renderer 
to draw the scene every time the screen is refreshed.*/

export default class Loop {
    constructor() {
        this.app = new App()
        this.camera = this.app.camera
        this.renderer = this.app.renderer
        this.world = this.app.world

        this.loop()
    }

    loop() {
        this.world.loop()
        this.camera.loop()
        this.renderer.loop()
        window.requestAnimationFrame(() => this.loop())
    }
}
