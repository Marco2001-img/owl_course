import { Component, useExternalListener, useRef, useState } from "@odoo/owl";

export class Dropdown extends Component{
    static template = "Dropdown";

    setup()
    {
        this.state = useState({ isOpen: false });
        this.dropdownRef = useRef("dropdownRef");
        useExternalListener(window, "click", this.closeDropDown, {capture: true})
    }

    toggleDropdown()
    {
        this.state.isOpen = !this.state.isOpen;
    }

    closeDropDown(env)
    {
        if(this.state.isOpen && !this.dropdownRef.el.contains(env.target))
        {
            this.state.isOpen = false

        }
    }
}