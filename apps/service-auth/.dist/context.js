export default async function buildContext({ req }) {
    const token = req.headers.authorization || "";
    return { token };
}
