type UserProps = {
    name: string;
    email: string;
};

const UserItem = ({ name, email }: UserProps) => {


    return (
        <div style={{ display: "flex", gap: "5px" }}>
            <div>{email}</div>
            <div>{name}</div>
        </div>
    );
};

export default UserItem;
