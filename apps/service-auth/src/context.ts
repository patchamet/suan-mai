export default async function buildContext({ req }: any) {
    const token = req.headers.authorization || "";
    return { token };
}
