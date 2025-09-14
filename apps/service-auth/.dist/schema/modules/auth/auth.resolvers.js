import { users } from "./auth.service.js";
import { signToken } from "../../../utils/jwt.js";
import { v4 as uuid } from "uuid";
export const resolvers = {
    Mutation: {
        signUp: (_, { username, password }) => {
            if (users.find(u => u.username === username)) {
                throw new Error("Username already exists");
            }
            const newUser = { id: uuid(), username, password };
            users.push(newUser);
            return {
                token: signToken(newUser),
                user: { id: newUser.id, username: newUser.username },
            };
        },
        signIn: (_, { username, password }) => {
            const user = users.find(u => u.username === username && u.password === password);
            if (!user)
                throw new Error("Invalid credentials");
            return {
                token: signToken(user),
                user: { id: user.id, username: user.username },
            };
        },
    },
};
