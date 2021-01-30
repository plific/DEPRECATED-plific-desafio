import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: "Hello World!" });
});

routes.get('/crud', (request, response) => {
  // Retorne um id em String do item Selecionado
  return response.json({ id: "0" });
});

routes.post('/crud', (request, response) => {
  // Retorne um id em String do item Adicionado
  return response.json({ id: "0" });
});

routes.put('/crud/:id', (request, response) => {
  // Retorne um id em String do item Atualizado
  return response.json({ id: "0" });
});

routes.delete('/crud/:id', (request, response) => {
  // Retorne um id em String do item Deletado
  return response.json({ id: "0" });
});

export default routes;
