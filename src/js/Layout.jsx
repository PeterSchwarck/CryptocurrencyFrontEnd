import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home.jsx";
import Product from "./views/Product.jsx";

import {AboutUs} from './views/AboutUs.jsx';

import {Confirm} from './views/Confirm.jsx';

import {NotificationCard} from './views/NotificationCard.jsx';

export class Layout extends Flux.View {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/index.html" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/aboutus" component={AboutUs} />
                            <Route exact path="/confirm" component={Confirm} />
                            <Route exact path="/card" component={NotificationCard} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
