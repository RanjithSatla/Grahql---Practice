import { GraphQLServer } from "graphql-yoga";

// type Definition (Schema) :

// Scalar types : String, Int, Float, Boolean, ID

//Creating Custom types :

const typeDefs = `
type Query {
  greeting(name:String): String!
  add(numbers:[Float!]) : Float!
  grades : [Int!]!
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
    greeting(parent, args, ctx, info) {
      if (args.name) return `Hello ${args.name}!`;
      return "Hello";
    },
    add(parent, args, ctx, info) {
      if (args.numbers.length === 0) {
        return 0;
      }
      return args.numbers.reduce((acc, curr) => {
        return acc + curr;
      });
    },
    grades(parent, args, ctx, info) {
      return [43, 54, 98];
    },
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
