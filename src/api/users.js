export const users = () => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
