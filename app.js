import express from 'express';
import cors from 'cors';
import sequelize from './src/sequelize.js';
import routesAprendiz from './src/routes/aprendizRoutes.js';
import routesEmpresa from './src/routes/empresaRoutes.js';
import swaggerUi  from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import dotenv from 'dotenv';

dotenv.config();


var port = process.env.PORT || 3000;
var app = express();

app.use(cors());
app.use(express.json()); // Para analisar o corpo das solicitações JSON

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de FuturoCode',
      version: '1.0.0',
      description: 'Esta é a documentação da API de Exemplo usando Swagger',
    },
    servers: [
      {
        url: 'http://localhost:'+port,
        description: 'API Local'
      }
    ],
    components: {
      schemas: {
        Empresa: {
          type: 'object',
          properties: {
            nome: { type: 'string' },
            nomeFantasia: { type: 'string' },
            enderecoCompleto: { type: 'string' },
            cnpjCpf: { type: 'string' },
            telefone: { type: 'string' },
            emails: { type: 'string' },
            valorTaxaAdministrativa: { type: 'number', format: 'double' },
            cobraTaxa: { type: 'boolean' }
          }
        },
        Aprendiz: {
          type: 'object',
          properties: {
            matricula: { type: 'integer' },
            turma: { type: 'integer' },
            nome: { type: 'string' },
            endereco: { type: 'string' },
            complemento: { type: 'string' },
            bairro: { type: 'string' },
            cidade: { type: 'string' },
            estado: { type: 'string' },
            cep: { type: 'string' },
            telefone1: { type: 'string' },
            telefone2: { type: 'string' },
            contato: { type: 'string' },
            codigoPagamento: { type: 'string' },
            identificacao: { type: 'string' },
            dataInicio: { type: 'string', format: 'date' },
            dataRegistro: { type: 'string', format: 'date' },
            dataTermino: { type: 'string', format: 'date' },
            dataNascimento: { type: 'string', format: 'date' },
            observacao1: { type: 'string' },
            observacao2: { type: 'string' },
            observacao3: { type: 'string' },
            nomeMae: { type: 'string' },
            cpf: { type: 'string' },
            numeroCTPS: { type: 'string' },
            serieCTPS: { type: 'string' },
            direta: { type: 'boolean' },
            valorBolsaAuxilio: { type: 'number', format: 'double' },
            tipoContrato: { type: 'string' },
            prontuario: { type: 'string' }
          }
        }
      }
    }
  },
  apis: ['./src/routes/aprendizRoutes.js', './src/routes/empresaRoutes.js']
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(routesAprendiz);
app.use(routesEmpresa);


app.listen(port, async () => {
  console.log(`Servidor rodando na porta ${port}` );
  await sequelize.sync(); // Cria as tabelas no banco de dados, se não existirem
});
