const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { frutasModel } = require('../../../src/models');
const { allFrutas, oneFruta } = require('../../mocks/frutasMocks');

describe('Teste de unidade da model da entidade "frutas"', function () {
  it('Retorna todas as frutas', async function () {
    sinon.stub(connection, 'execute').resolves([allFrutas]);

    const result = await frutasModel.findAll();

    expect(result).to.be.deep.equal(allFrutas);
  });

  it('Retorna fruta por meio do id', async function () {
    sinon.stub(connection, 'execute').resolves([[oneFruta]]);

    const result = await frutasModel.findById(1);

    expect(result).to.be.deep.equal(oneFruta);
  });

  afterEach(function () {
    sinon.restore();
  }); 
});