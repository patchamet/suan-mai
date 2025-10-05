import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs as dataTypeDefs } from "./modules/data/data.typeDefs.js";
import { resolvers as dataResolvers } from "./modules/data/data.resolvers.js";

const schema = makeExecutableSchema({
    typeDefs: [dataTypeDefs],
    resolvers: [dataResolvers],
});

export default schema;
