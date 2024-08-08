import React , {useState} from "react";
import { MenuItem, Tab } from "semantic-ui-react";
import {Icon} from "../../../assets"
import "./Auth.scss";
import { render } from "@testing-library/react";

export function Auth(){
    const [activeIndex, setActiveIndex] = useState(0);

    const openLogin = () => setActiveIndex(0);

    const panes = [
        {
          menuItem: "Entrar",
          render: () => (
            <Tab.Pane>
              <h2>Login Form</h2>
            </Tab.Pane>
          ),
        },
        {
          menuItem: "Nuevo usuario",
          render: () => (
            <Tab.Pane>
              <h2>Register Form</h2>
            </Tab.Pane>
          ),
        },
      ];

    return(
        <div className="auth">
            <Icon.LogoWhite className="logo" />
            <Tab panes={panes} className="auth__forms" activeIndex={activeIndex} onTabChange={(_, data) => setActiveIndex(data.activeIndex)}/>
        </div>
    );
}