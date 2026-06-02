import { Component } from "@odoo/owl";
import { Counter } from "./Component/Counter";
import { ToggleText } from "./Component/ToggleText";

export class Root extends Component {
  static template = "Root";
  static components = {Counter}
  //static components = { ToggleText }

}
