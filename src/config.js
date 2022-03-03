import { config } from "dotenv";
config();

const uri = 'mongodb+srv://parese95:Lukiistriike95@cluster0.rjsnp.mongodb.net/eureka_challenge?retryWrites=true&w=majority'


export default {
  MONGODB_URI: process.env.MONGODB_URI || uri,
  PORT: process.env.PORT || 4000,
  SECRET: 'stock-market-api'
};
