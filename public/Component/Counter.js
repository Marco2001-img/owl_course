import { Component,useState } from "@odoo/owl";
import { useCounter } from "./hook/useCounter";


export class Counter extends Component {
    static template ="Counter";

    setup(){
        this.counter = useCounter(10);

    }

    // increment()
    // {
    //     this.state.count++;
    // }

    // decrement()
    // {
    //     this.state.count--;
    // }

    logCount(mensaje)
    {
        console.log(`${mensaje}`)
    }
}