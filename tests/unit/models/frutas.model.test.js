const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { frutasModel } = require('../../../src/models');
const { allFrutas } = require('../../mocks/frutasMocks');

describe('Teste de unidade do model da entidade "frutas"', function () {
  it('Testa se retorna todos as frutas', async function () {
    sinon.stub(connection, 'execute').resolves([allFrutas]);

    const result = await frutasModel.findAll();

    expect(result).to.be.deep.equal(allFrutas);
  });
});