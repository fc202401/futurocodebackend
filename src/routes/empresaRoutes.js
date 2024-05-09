// routes/aprendizRoutes.js
import express from 'express';
import EmpresaController from '../controllers/EmpresaController.js';

const router = express.Router();

/**
 * @openapi
 * /empresa:
 *   post:
 *     summary: Cria uma nova empresa
 *     description: Cria um novo registro de empresa no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomeFantasia:
 *                 type: string
 *               enderecoCompleto:
 *                 type: string
 *               cnpjCpf:
 *                 type: string
 *               telefone:
 *                 type: string
 *               emails:
 *                 type: string
 *               valorTaxaAdministrativa:
 *                 type: number
 *                 format: double
 *               cobraTaxa:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso.
 *       400:
 *         description: Erro na requisição.
 */
router.post('/empresa', EmpresaController.criarEmpresa);

/**
 * @openapi
 * /empresa:
 *   get:
 *     summary: Lista todas as empresas
 *     description: Retorna uma lista de todas as empresas registradas no sistema.
 *     responses:
 *       200:
 *         description: Uma lista de empresas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empresa'
 *       400:
 *         description: Erro ao listar as empresas.
 */
router.get('/empresa', EmpresaController.listarEmpresas);

/**
 * @openapi
 * /empresa/{id}:
 *   get:
 *     summary: Obter uma empresa específica pelo ID
 *     description: Retorna detalhes de uma empresa específica pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Detalhes da empresa.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empresa'
 *       404:
 *         description: Empresa não encontrada.
 */
router.get('/empresa/:id', EmpresaController.obterEmpresa);

/**
 * @openapi
 * /empresa/{id}:
 *   put:
 *     summary: Atualiza uma empresa específica
 *     description: Atualiza dados de uma empresa existente pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da empresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empresa'
 *     responses:
 *       200:
 *         description: Empresa atualizada com sucesso.
 *       404:
 *         description: Empresa não encontrada.
 *       400:
 *         description: Erro ao atualizar a empresa.
 */
router.put('/empresa/:id', EmpresaController.atualizarEmpresa);

/**
 * @openapi
 * /empresa/{id}:
 *   delete:
 *     summary: Deleta uma empresa específica
 *     description: Remove uma empresa do sistema pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da empresa
 *     responses:
 *       204:
 *         description: Empresa deletada com sucesso.
 *       404:
 *         description: Empresa não encontrada.
 */
router.delete('/empresa/:id', EmpresaController.deletarEmpresa);

export default router;



