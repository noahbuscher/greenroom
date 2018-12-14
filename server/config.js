const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/greenroom',
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV || 'production'
};

export default config;
