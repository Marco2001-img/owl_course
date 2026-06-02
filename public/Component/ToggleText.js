import { Component,useRef, xml } from "@odoo/owl";


export class ToggleText extends Component {
    static template = xml `
         <h1>Toggle Text</h1>
        <p t-ref="toggletext">Presioname</p>
        <button t-on-click="toggleTxt">OKEY</button>
    `
    
    setup()
    {
        this.toogleTextRef = useRef("toggleText")
    }

    toggleTxt()
    {
        this.toggleTextRef.el.textContent = 
        this.toggleTextRef.el.textContent === "Presioname"
        ? "Se presiono"
        : "Presioname";
    }
}