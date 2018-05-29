import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {AboutUs} from './views/AboutUs.jsx';
import {Scanner} from './views/Introduction.jsx';
import {Confirm} from './views/Confirm.jsx';
import {NotificationCard} from './views/NotificationCard.jsx';
import {HomeEdit} from './views/HomeEdit.jsx';

export class Layout extends Flux.View {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            
                            <Route exact path="/aboutus" component={AboutUs} />
                            <Route exact path="/" component={Scanner} />
                            <Route exact path="/index.html" component={Scanner} />
                            <Route exact path="/confirm" component={Confirm} />
                            <Route exact path="/card" component={NotificationCard} />
                            <Route exact path="/home2" component={HomeEdit} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
