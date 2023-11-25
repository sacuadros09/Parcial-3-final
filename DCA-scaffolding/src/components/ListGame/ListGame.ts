import "./components/export"

export class ListGame extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
       
    }
}

customElements.define('app-container', ListGame)