// models/relacaoMensal.js
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const RelacaoMensal = sequelize.define('RelacaoMensal', {
  empresaCodigo: DataTypes.INTEGER,
  aprendizInterno: DataTypes.INTEGER,
  patrulha: DataTypes.STRING,
  diasMes: DataTypes.INTEGER,
  dados01: DataTypes.STRING,
  dados02: DataTypes.STRING,
  dados03: DataTypes.STRING,
  dados04: DataTypes.STRING,
  codigoPagamento: DataTypes.STRING,
  identificacao: DataTypes.STRING,
  dataNascimento: DataTypes.DATEONLY,
  dataContrato: DataTypes.DATEONLY,
  dataSaida: DataTypes.DATEONLY,
  cobrado: DataTypes.DECIMAL(10, 2),
  valor01: DataTypes.DECIMAL(10, 2),
  // Inclua os demais campos valor02 a valor18 conforme sua necessidade
  totalAgerado: DataTypes.DECIMAL(10, 2),
  folha01: DataTypes.DECIMAL(10, 2),
  // Inclua os demais campos folha02 a folha09 conforme sua necessidade
  totalFolha: DataTypes.DECIMAL(10, 2),
  totalSefip: DataTypes.DECIMAL(10, 2),
  marcaXX: DataTypes.STRING
}, {
  timestamps: false
});

export default RelacaoMensal;
