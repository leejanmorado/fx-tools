import axios from 'axios';

export const TEClient = axios.create({
  baseURL: 'https://api.tradingeconomics.com/',
  headers: {
    Authorization: `Client ${process.env.NEXT_PUBLIC_TE_API_KEY}`
  },
});
