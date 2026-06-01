import { Component,useState } from "@odoo/owl";


export class Counter extends Component {
    static template ="Counter";

    setup(){
        this.state = useState({count: 0});

    }

    increment()
    {
        this.state.count++;
    }

    decrement()
    {
        this.state.count--;
    }
}