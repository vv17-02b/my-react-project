const user = { id: 1, name: "Alice", imageUrl: "/images/1683828889230.jpg" };

return (
    <div>
        <h1>{user.name}</h1>
        {user.imageUrl && <img src={user.imageUrl} alt={user.name} />}
    </div>
);
