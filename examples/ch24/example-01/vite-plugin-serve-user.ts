import { Plugin } from "vite";

export default function userJsonPlugin(): Plugin {
  return {
    name: 'vite-plugin-serve-user',
    configureServer(server) {
      server.middlewares.use('/user.json', async (req, res) => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          name: 'John Doe',
          age: 20,
          email: 'jdoe@example.com',
        }));
      });
    },
  };
}
