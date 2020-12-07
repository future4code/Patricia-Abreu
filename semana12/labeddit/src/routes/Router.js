import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FeedPage from '../screens/FeedPage/FeedPage.js';
import LoginPage from '../screens/LoginPage/LoginPage.js'
import SignUpPage from '../screens/SignUpPage/SignUpPage.js'

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"} >
                    <LoginPage />

                </Route>
                <Route exact path={"/signup"} >
                    <SignUpPage />

                </Route>
                <Route exact path={"/feed"} >
                    <FeedPage />
                </Route>
                <Route exact path={"/post/:postId"} >
                    <p> post details </p>

                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;