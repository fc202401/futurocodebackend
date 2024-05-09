// routes/aprendizRoutes.js
import express from 'express';
import AprendizController from '../controllers/AprendizController.js';

const router = express.Router();

/**
 * @openapi
 * /aprendiz:
 *   post:
 *     summary: Cria um novo aprendiz
 *     description: Registra um novo aprendiz no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aprendiz'
 *     responses:
 *       201:
 *         description: Aprendiz criado com sucesso.
 *       400:
 *         description: Erro na requisição.
 */
router.post('/aprendiz', AprendizController.criarAprendiz);
router.get('/aprendiz', AprendizController.listarAprendizes);
router.get('/aprendiz/:id', AprendizController.obterAprendiz);
router.put('/aprendiz/:id', AprendizController.atualizarAprendiz);
router.delete('/aprendiz/:id', AprendizController.deletarAprendiz);

export default router;



