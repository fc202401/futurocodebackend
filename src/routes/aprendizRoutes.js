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
/**
 * @openapi
 * /aprendiz:
 *   get:
 *     summary: Lista todos os aprendizes
 *     description: Retorna uma lista de todos os aprendizes registrados no sistema.
 *     responses:
 *       200:
 *         description: Uma lista de aprendizes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aprendiz'
 *       400:
 *         description: Erro ao listar os aprendizes.
 */
router.get('/aprendiz', AprendizController.listarAprendizes);
/**
 * @openapi
 * /aprendiz/{id}:
 *   get:
 *     summary: Obter um aprendiz específico pelo ID
 *     description: Retorna detalhes de um aprendiz específico.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aprendiz
 *     responses:
 *       200:
 *         description: Detalhes do aprendiz solicitado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aprendiz'
 *       404:
 *         description: Aprendiz não encontrado.
 */
router.get('/aprendiz/:id', AprendizController.obterAprendiz);

/**
 * @openapi
 * /aprendiz/{id}:
 *   put:
 *     summary: Atualiza um aprendiz específico
 *     description: Atualiza dados de um aprendiz existente pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aprendiz
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aprendiz'
 *     responses:
 *       200:
 *         description: Aprendiz atualizado com sucesso.
 *       404:
 *         description: Aprendiz não encontrado.
 *       400:
 *         description: Erro na requisição.
 */
router.put('/aprendiz/:id', AprendizController.atualizarAprendiz);

/**
 * @openapi
 * /aprendiz/{id}:
 *   delete:
 *     summary: Deleta um aprendiz específico
 *     description: Remove um aprendiz do sistema pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aprendiz
 *     responses:
 *       204:
 *         description: Aprendiz deletado com sucesso.
 *       404:
 *         description: Aprendiz não encontrado.
 */
router.delete('/aprendiz/:id', AprendizController.deletarAprendiz);

export default router;



