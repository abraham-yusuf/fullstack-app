module.exports = ({ env }) => ({
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: env("DATABASE_HOST"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME"),
          username: env("DATABASE_USERNAME"),
          password: env("DATABASE_PASSWORD"),
          schema: "public",
          ssl: { rejectUnauthorized: false },
        },
        options: {},
      },
    },
  });
  