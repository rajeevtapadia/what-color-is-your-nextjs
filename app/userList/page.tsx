


const userList = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return (
    <div>
      <div>userList</div>
      <ul>
        {data.map((user:any) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default userList;
