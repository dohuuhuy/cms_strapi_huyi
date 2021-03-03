module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        host: "103.125.170.20",
        port: 10184,
        database: "personal_website",
        username: "",
        password: "",
      },
      options: {},
    },
  },
});
