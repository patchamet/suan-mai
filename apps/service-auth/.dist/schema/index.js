import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as authTypeDefs } from "./modules/auth/auth.typeDefs.js";
import { resolvers as authResolvers } from "./modules/auth/auth.resolvers.js";
const schema = makeExecutableSchema({
    typeDefs: [authTypeDefs],
    resolvers: [authResolvers],
});
export default schema;
