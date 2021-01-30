import { Connection, getConnection } from 'typeorm';
import createConnection from '../database';

let connection: Connection;

describe('Conexão com Banco de Dados', () => {
  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });
  it('Deveria conectar-se ao Banco de Dados ', async () => {
    connection = await createConnection('test-connection');

    expect(connection).toBeTruthy();
  });

  it('Deveria rodar as migrations', async () => {
    await connection.query('DROP TABLE IF EXISTS example');

    await connection.runMigrations();
  });

});
