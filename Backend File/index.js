const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const dotenv = require("dotenv");
const typeDefs = require("./components/graphql/typeDefs");
const resolvers = require("./components/graphql/resolvers");
const cors = require("cors")
const {cloudinary} = require('cloudinary');
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false,  // see below for more about this
  cache: "bounded",
  cors: {
    origin: ["https://studio.apollographql.com", "http://127.0.0.1:8000"]
  },
});
const connectDB = require("./components/db/conn");

// cloudinary.config({
//   cloud_name: process.env.CLOUDNIARY_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET,
//   secure: true
// })




(async () => {
  await connectDB();
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT || 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
