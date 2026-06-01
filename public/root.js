import { Component } from "@odoo/owl";
import { Counter } from "./Component/Counter";

export class Root extends Component {
  static template = "Root";
  static components = {Counter}
}
