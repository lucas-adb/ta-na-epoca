const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const { frutasModel } = require('../../../src/models');
const { allFrutas } = require('../../mocks/frutasMocks');
const { frutasService } = require('../../../src/services');

describe('Teste de unidade do model da entidade "frutas"', function () {
  it('Testa se retorna todas as frutas', async function () {
    sinon.stub(frutasModel, 'findAll').resolves(allFrutas);

    const result = await frutasService.findAll();

    expect(result.status).to.be.equal('SUCCESSFUL');
    expect(result.data).to.be.deep.equal(allFrutas);
  });
});