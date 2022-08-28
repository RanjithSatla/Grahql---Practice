import { GraphQLServer } from "graphql-yoga";

// type Definition (Schema) :

// Scalar types : String, Int, Float, Boolean, ID

const typeDefs = `
type Query {
   title : String!
   price : Float!
   releaseYear : Int
   rating : Float
   inStock : Boolean!
}
`;

// Resolvers :

const resolvers = {
  Query: {
    title() {
      return "ipad Pro";
    },
    price() {
      return 40000.5;
    },
    releaseYear() {
      return 2015;
    },
    rating() {
      return null;
    },
    inStock() {
      return false;
    },
  },
};

// Create Server :

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log("Server is Up"));
