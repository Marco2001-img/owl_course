import { Component, useComponent, useState } from "@odoo/owl";

export function useCounter(inicitialValue = 0) {
    const component = useComponent();
    const state = useState({ count: inicitialValue })

    function increment() {
        state.count++;
        component.logCount(`incrementado ${state.count}`)
    }

    function decrement() {
        state.count--;
        component.logCount(`decremantado ${state.count}`)
    }

    return {
        get count() {
            return state.count;
        },
        increment,
        decrement
    }
}