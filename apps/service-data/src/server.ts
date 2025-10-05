import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema/index.js";
import buildContext from "./context.js";

export async function startServer() {
    const server = new ApolloServer({
        schema,
    });

    const { url } = await startStandaloneServer(server, {
        context: buildContext,
        listen: { port: 4101 },
    });

    console.log(`🚀 Data service running at ${url}`);

    return { server, url };
}
