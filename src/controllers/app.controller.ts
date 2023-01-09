/* eslint-disable prettier/prettier */
// app.controller.ts
import { Controller } from '@nestjs/common';

@Controller('app-controller')
export class AppController {
  // @Put()
  // async update(@Res() res, @Req() req) {
  //   console.log('.>>>>>data: ', req.body);
  //   const dados = req.body;
  //   try {
  //     //Use o parâmetro campos para montar uma string de inserção SQL dinâmica que será usada para criar a tabela:
  //     let sql = `
  //     CREATE TABLE campos_tabela (
  //       id serial PRIMARY KEY,
  //   `;
  //     // Adicione uma coluna para cada campo
  //     for (const campo of dados.campos) {
  //       sql += `${campo.name} ${campo.type},`;
  //     }
  //     // Remova a última vírgula adicionada
  //     sql = sql.slice(0, -1);
  //     sql += ');';
  //     // Use o parâmetro campos para montar uma string de atualização SQL dinâmica que será usada para atualizar as colunas:
  //     let sql_atualizacao = `
  //   UPDATE campos_tabela
  //   SET `;
  //     // Adicione um parâmetro de atualização para cada campo
  //     for (let i = 0; i < dados.campos.length; i++) {
  //       sql_atualizacao += `${dados.campos[i].name} = $${i + 1},`;
  //     }
  //     // Remova a última vírgula adicionada
  //     sql_atualizacao = sql_atualizacao.slice(0, -1);
  //     sql_atualizacao += ' WHERE id = $' + (dados.campos.length + 1) + ';';
  //     // Verifique se a tabela "campos_tabela" existe
  //     const result = await this.databaseService.query(`
  //   SELECT EXISTS (
  //     SELECT 1
  //     FROM   information_schema.tables
  //     WHERE  table_schema = 'public'
  //     AND    table_name = 'campos_tabela'
  //   );
  //   `);
  //     if (!result.rows[0].exists) {
  //       // Crie a tabela "campos_tabela" se ela não existir
  //       console.log('>>>>>>>>sql: ', sql);
  //       await this.databaseService.query(sql);
  //     } else {
  //       // Atualize as colunas da tabela "campos_tabela"
  //       if (dados.data && dados.data.length) {
  //         const values = dados.campos.map((campo) => dados.data[campo.name]);
  //         values.push(dados.data.id);
  //         await this.databaseService.query(sql_atualizacao, values);
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send(error);
  //   }
  // }
}
