const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/greenroom',
  port:  process.env.API_PORT || 3001
};

export default config;
