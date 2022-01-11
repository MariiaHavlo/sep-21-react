import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <div className="App">
            <div className="UsersPostWrapper">
                <div className="Users">
                    <Users/>
                </div>
                <div className="Posts">
                    <Posts/>
                </div>

            </div>
            <div className="Comments">
                <Comments/>
            </div>


        </div>
    );
}

export default App;
