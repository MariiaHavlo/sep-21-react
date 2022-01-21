import React from 'react';
import {Routes,Route} from 'react-router-dom';

import './App.css'

import UsersPage from "./pages/usersPage/UsersPage";
import PostsPage from "./pages/postsPage/PostsPage";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import PostCommentsPage from "./pages/postCommentsPage/PostCommentsPage";
import UserPostsPage from "./pages/userPostsPage/UserPostsPage";

const App = () => {
    return (
        <div>


            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>} />

                    <Route path={'users'} element={<UsersPage/>} >
                        <Route path={':id'} element={<SingleUserPage/>} >
                            <Route path={':posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={':comments'} element={<PostCommentsPage/>}/>

                        </Route>
                    </Route>

                </Route>

            </Routes>

        </div>
    );
};

export default App;