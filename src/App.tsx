import { useState } from "react";
import DragItem from "./components/DragItem";
import DragArea from "./components/DragArea";
import UserItem from "./components/UserItem";
import { User } from "./types";
import users from "./users.json";

const App = () => {
  const [exampleUsers, setExampleUsers] = useState<User[]>(users);

  const handleUsersChange = (newUsers: User[]) => {
    setExampleUsers(newUsers);
  };

  return (
    <div>
      <h1>Draggable User List</h1>
      <ul>
        <DragArea items={exampleUsers} onChange={handleUsersChange}>
          {exampleUsers.map((user, i) => (
            <DragItem key={user.id} index={i}>
              <UserItem name={user.firstName} email={user.email} />
            </DragItem>
          ))}
        </DragArea>
      </ul>
    </div>
  );
};

export default App;
