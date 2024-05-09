// models/aprendiz.js
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';


const Aprendiz = sequelize.define('Aprendiz', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  matricula: { type:DataTypes.INTEGER, allowNull: false ,unique: true},
  turma: DataTypes.INTEGER,
  nome: DataTypes.STRING,
  endereco: DataTypes.STRING,
  complemento: DataTypes.STRING,
  bairro: DataTypes.STRING,
  cidade: DataTypes.STRING,
  estado: DataTypes.STRING,
  cep: DataTypes.STRING,
  telefone1: DataTypes.STRING,
  telefone2: DataTypes.STRING,
  contato: DataTypes.STRING,
  codigoPagamento: DataTypes.STRING,
  identificacao: DataTypes.STRING,
  dataInicio: DataTypes.DATEONLY,
  dataRegistro: DataTypes.DATEONLY,
  dataTermino: DataTypes.DATEONLY,
  dataNascimento: DataTypes.DATEONLY,
  observacao1: DataTypes.TEXT,
  observacao2: DataTypes.TEXT,
  observacao3: DataTypes.TEXT,
  nomeMae: DataTypes.STRING,
  cpf: DataTypes.STRING,
  numeroCTPS: DataTypes.STRING,
  serieCTPS: DataTypes.STRING,
  direta: DataTypes.BOOLEAN,
  valorBolsaAuxilio: DataTypes.DECIMAL(10, 2),
  tipoContrato: DataTypes.STRING,
  prontuario: DataTypes.STRING
}, {
  timestamps: false,
  tableName: 'Aprendiz'

});

export default Aprendiz;
