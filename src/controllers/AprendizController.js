// controllers/AprendizController.js
import Aprendiz from '../models/aprendiz.js';

const AprendizController = {
  // Criar um novo Aprendiz
  async criarAprendiz(req, res) {
    try {
      const aprendiz = await Aprendiz.create(req.body);
      return res.status(201).json(aprendiz);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Listar todos os Aprendizes
  async listarAprendizes(req, res) {
    try {
      const aprendizes = await Aprendiz.findAll();
      return res.status(200).json(aprendizes);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Obter um Aprendiz por ID
  async obterAprendiz(req, res) {
    try {
      const { id } = req.params;
      const aprendiz = await Aprendiz.findByPk(id);

      if (!aprendiz) {
        return res.status(404).json({ error: 'Aprendiz não encontrado' });
      }

      return res.status(200).json(aprendiz);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Atualizar um Aprendiz
  async atualizarAprendiz(req, res) {
    try {
      const { id } = req.params;
      const [ updated ] = await Aprendiz.update(req.body, { where: { id: id } });

      if (updated) {
        const aprendizAtualizado = await Aprendiz.findByPk(id);
        return res.status(200).json(aprendizAtualizado);
      }

      throw new Error('Aprendiz não encontrado');
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Deletar um Aprendiz
  async deletarAprendiz(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Aprendiz.destroy({ where: { id: id } });

      if (deleted) {
        return res.status(204).send("Aprendiz deletado com sucesso.");
      }

      throw new Error('Aprendiz não encontrado');
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

export default AprendizController;
