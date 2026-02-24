export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongoDB: process.env.MONGO_DB,
  port: process.env.PORT || 3000,
  defaultLimit: process.env.DEFAULT_LIMIT || 5,
});
