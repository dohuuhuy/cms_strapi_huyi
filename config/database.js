module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        host: "localhost",
        port: 27017,
        database: "personal_website",
        username: "",
        password: "",
      },
      options: {
        authenticationDatabase: "strapi-test",
        ssl: false,
      },
    },
  },
});
