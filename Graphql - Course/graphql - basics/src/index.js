import { GraphQLServer } from "graphql-yoga";

// type Definition (Schema) :

// Scalar types : String, Int, Float, Boolean, ID

//Creating Custom types :

const typeDefs = `
type Query {
  me : User!
  post : Post!
}


type User {
  id : ID!
  name : String!
  email : String!
  age : Int
}

type Post {
  id: ID!
  title : String!
  body : String! 
  published : Int!

}

`;

// Resolvers :

const resolvers = {
  Query: {
    me() {
      return {
        id: "122abc",
        name: "Ranjith Satla",
        email: "abc@gmail.com",
        age: 25,
      };
    },
    post() {
      return {
        id: "qwerty",
        title: "Post Title",
        body: "Body",
        published: 2022,
      };
    },
  },
};

// Create Server :

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log("Server is Up"));
