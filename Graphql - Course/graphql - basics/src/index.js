import { GraphQLServer } from "graphql-yoga";

// type Definition (Schema) :

// Scalar types : String, Int, Float, Boolean, ID

//Creating Custom types :

const users = [
  {
    id: 1,
    name: "Ranjith",
    email: "ranjith@gmail.com",
    age: 25,
  },
  {
    id: 2,
    name: "Vishnu",
    email: "vishnu@gmail.com",
    age: 24,
  },
  {
    id: 3,
    name: "Bhanu",
    email: "bhanu@gmail.com",
  },
];

const posts = [
  {
    id: 1,
    title: "test1",
    body: "Iam testing posts!",
    published: 2022,
  },
  {
    id: 2,
    title: "test12",
    body: "Iam testing posts12!",
    published: 2020,
  },
  {
    id: 3,
    title: "dummy",
    body: "Iam  posts!",
  },
];

const typeDefs = `
type Query {
  user(query:String) : [User!]!
  me : User!
  post(query:String) : [Post!]!
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
  published : Int

}

`;

// Resolvers :

const resolvers = {
  Query: {
    user(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());
      });
    },
    me() {
      return {
        id: "122abc",
        name: "Ranjith Satla",
        email: "abc@gmail.com",
        age: 25,
      };
    },
    post(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        const bodyFilter = post.body
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());
        const titleFilter = post.title
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());
        return bodyFilter || titleFilter;
      });
    },
  },
};

// Create Server :

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log("Server is Up"));
