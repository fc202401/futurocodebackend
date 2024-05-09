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
router.get('/empresa', EmpresaController.listarEmpresas);
router.get('/empresa/:id', EmpresaController.obterEmpresa);
router.put('/empresa/:id', EmpresaController.atualizarEmpresa);
router.delete('/empresa/:id', EmpresaController.deletarEmpresa);

export default router;



