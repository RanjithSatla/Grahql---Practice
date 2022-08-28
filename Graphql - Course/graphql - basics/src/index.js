import { GraphQLServer } from "graphql-yoga";

// type Definition (Schema) :

const typeDefs = `
type Query {
    hello : String!
    name : String!
    location : String!
    Bio : String!
}
`;

// Resolvers :

const resolvers = {
  Query: {
    hello() {
      return "This is my first query";
    },
    name() {
      return "Ranjith Satla";
    },
    Bio() {
      return "Iam a full stack developer";
    },
    location() {
      return "Hyderabad";
    },
  },
};

// Create Server :

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log("Server is Up"));
