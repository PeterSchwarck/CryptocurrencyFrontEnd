import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {AboutUs} from './views/AboutUs.jsx';
import {Scanner} from './views/Introduction.jsx';
import {ShowNotification} from './views/ShowNotification.jsx';
import {HomeEdit} from './views/HomeEdit.jsx';
import {ContactUs} from './views/Contactus.jsx';
import {TestView}  from './views/TestView.jsx';

export class Layout extends Flux.View {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            
                            <Route exact path="/aboutus" component={AboutUs} />
                            <Route exact path="/" component={HomeEdit} />
                            <Route exact path="/index.html" component={HomeEdit} />
                            <Route exact path="/card" component={ShowNotification} />
                            <Route exact path="/home2" component={HomeEdit} />
                            <Route exact path="/Contactus" component={ContactUs} />
                            <Route exact path="/Drop" component={TestView} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
