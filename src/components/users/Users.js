
import User from "../user/User";

const Users = ({selectedUsers}) => {

    return (
        <div>
            {selectedUsers.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;