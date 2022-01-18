import React from 'react';
import {Routes,Route} from 'react-router-dom';

import './App.css'

import UsersPage from "./pages/usersPage/UsersPage";
import PostsPage from "./pages/postsPage/PostsPage";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/homePage/HomePage";

const App = () => {
    return (
        <div>


            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>} />
                    <Route path={'users'} element={<UsersPage/>} />
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>

            </Routes>

        </div>
    );
};

export default App;