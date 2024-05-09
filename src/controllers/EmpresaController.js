// controllers/EmpresaController.js
import Empresa from '../models/empresa.js';

const EmpresaController = {
  // Criar um novo Empresa
  async criarEmpresa(req, res) {
    try {
      const empresa = await Empresa.create(req.body);
      return res.status(201).json(empresa);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Listar todos os Empresaes
  async listarEmpresas(req, res) {
    try {
      const empresaes = await Empresa.findAll();
      return res.status(200).json(empresaes);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Obter um Empresa por ID
  async obterEmpresa(req, res) {
    try {
      const { id } = req.params;
      const empresa = await Empresa.findByPk(id);

      if (!empresa) {
        return res.status(404).json({ error: 'Empresa não encontrado' });
      }

      return res.status(200).json(empresa);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Atualizar um Empresa
  async atualizarEmpresa(req, res) {
    try {
      const { id } = req.params;
      const [ updated ] = await Empresa.update(req.body, { where: { id: id } });

      if (updated) {
        const empresaAtualizado = await Empresa.findByPk(id);
        return res.status(200).json(empresaAtualizado);
      }

      throw new Error('Empresa não encontrado');
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Deletar um Empresa
  async deletarEmpresa(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Empresa.destroy({ where: { id: id } });

      if (deleted) {
        return res.status(204).send("Empresa deletado com sucesso.");
      }

      throw new Error('Empresa não encontrado');
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

export default EmpresaController;
