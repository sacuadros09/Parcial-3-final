import { User } from "../../types/user";

export class Form extends HTMLElement {
   
    const : User= {
        name:"",
        color:"",
        letter:"",
    }
    
    
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const Container = this.ownerDocument.createElement("section")

        const TitleName = this.ownerDocument.createElement("label")
        TitleName.textContent = "Name"
    
    
        const name = this.ownerDocument.createElement("input")
       
        const TitleColor = this.ownerDocument.createElement("label")
        TitleColor.textContent = "Escoge tu Color"

        const color = this.ownerDocument.createElement("input")

        const TittleLetter = this.ownerDocument.createElement("label")
        TittleLetter.textContent = "Escoge tu letra"

        const letter = this.ownerDocument.createElement("input")
       
        const btn = this.ownerDocument.createElement("button")
        btn.textContent = "save"

        Container.appendChild(TitleName)
        Container.appendChild(name)
        Container.appendChild(TitleColor)
        Container.appendChild(color)
        Container.appendChild(TittleLetter)
        Container.appendChild(letter)
        Container.appendChild(btn)
        this.shadowRoot?.appendChild(Container)
       
        }
    
    }

customElements.define('app-form', Form)

