let users = []; // In-memory data store

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { username }) => {
        return users.find(user => user.username === username);
    },
  },
  Mutation: {
    createUser: (parent, { username, name, bio }) => {
      if (users.findIndex(user => user.username === username) != -1){
        return null
      }
      
      const newUser = { username, name, bio };
      users.push(newUser);
      return newUser;
    },
    updateUser: (parent, {username, name, bio}) => {
        let user = users.find(user => user.username === username);
        if (user) {
            user.name = name || user.name;
            user.bio = bio || user.bio;
          } else {
            user = { username, name, bio };
            users.push(user);
          }
        return user;
    },
    deleteUser: (parent, { username }) => {
        const userIndex = users.findIndex(user => user.username === username);
        if (userIndex !== -1) {
          const deletedUser = users[userIndex];
          users.splice(userIndex, 1);
          return deletedUser;
        } else {
          return null; // User not found
        }
      }
  },
};

module.exports = resolvers;

  