import request from 'supertest';

import app from '../app';

describe('Rotas do CRUD', () => {
  it('Deveria chamar a rota padrão GET e receber a mensagem Hello World!', async () => {
    const response = await request(app).get('/')

    expect(response.body.message).toBe("Hello World!");
  });

  it('Deveria chamar a rota GET e ter uma resposta do id Selecionado', async () => {
    const response = await request(app).get('/crud');

    expect(response.body).toMatchObject(expect.objectContaining({
      id: expect.any(String)
    }));
  });

  it('Deveria chamar a rota POST e ter uma resposta do id Adicionado', async () => {
    const response = await request(app).post('/crud').send({
      message: "ok",
    });

    expect(response.body).toMatchObject(expect.objectContaining({
      id: expect.any(String)
    }));
  });

  it('Deveria chamar a rota PUT e ter uma resposta do id Atualizado', async () => {
    const { body } = await request(app).get('/crud');

    const response = await request(app).put(`/crud/${body.id}`).send({
      message: "ok",
    });

    expect(response.body).toMatchObject(expect.objectContaining({
      id: expect.any(String)
    }));
  });

  it('Deveria chamar a rota DELETE e ter uma resposta do id deletado', async () => {
    const { body } = await request(app).get('/crud');

    const response = await request(app).delete(`/crud/${body.id}`).send({
      message: "ok",
    });

    expect(response.body).toMatchObject(expect.objectContaining({
      id: expect.any(String)
    }));
  });
});
