const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/greenroom',
  port: process.env.PORT || 3000,
  env: process.env.ENV || 'production'
};

export default config;
