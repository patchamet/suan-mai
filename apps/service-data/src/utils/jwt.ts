import jwt from "jsonwebtoken";

const SECRET = "SUPER_SECRET_KEY"; // move to .env in production

export function signToken(user: any) {
    return jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
    try {
        if (!token) return null;
        return jwt.verify(token.replace("Bearer ", ""), SECRET);
    } catch {
        return null;
    }
}
