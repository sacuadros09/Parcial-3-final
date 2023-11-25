import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const form = this.ownerDocument.createElement('app-form');
        this.shadowRoot?.appendChild(form);

        const listgame = this.ownerDocument.createElement('app-listgame');
        this.shadowRoot?.appendChild(listgame);
    }
}

customElements.define('app-container', AppContainer)