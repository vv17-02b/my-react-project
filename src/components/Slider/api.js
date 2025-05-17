// api.js — імітація запиту до "API" без сервера

export const getUsers = () => {
    return Promise.resolve([
        {
            id: 1,
            name: "John Doe",
            imageUrl: "/assets/accent/1.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            imageUrl: "/assets/accent/2.jpg",
        },
        {
            id: 3,
            name: "Alice Johnson",
            imageUrl: "/assets/accent/3.jpg",
        },
        {
            id: 4,
            name: "Alice Johnson",
            imageUrl: "/assets/accent/4.jpg",
        },
        {
            id: 5,
            name: "Alice Johnson",
            imageUrl: "/assets/accent/5.jpg",
        },
        {
            id: 6,
            name: "Alice Johnson",
            imageUrl: "/assets/accent/6.jpg",
        },
    ]);
};
  