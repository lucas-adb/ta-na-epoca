const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const { frutasModel } = require('../../../src/models');
const { allFrutas, oneFruta } = require('../../mocks/frutasMocks');
const { frutasService } = require('../../../src/services');

describe('Teste de unidade da service da entidade "frutas"', function () {
  it('Retorna todas as frutas', async function () {
    sinon.stub(frutasModel, 'findAll').resolves(allFrutas);

    const result = await frutasService.findAll();

    expect(result.status).to.be.equal('SUCCESSFUL');
    expect(result.data).to.be.deep.equal(allFrutas);
  });

  describe('Testa o retorno de uma fruta de acordo com um id', function () {
    it('Retorna fruta por meio de um id válido', async function () {
      sinon.stub(frutasModel, 'findById').resolves(oneFruta);
  
      const result = await frutasService.findById(1);
  
      expect(result.status).to.be.equal('SUCCESSFUL');
      expect(result.data).to.be.deep.equal(oneFruta);
    });

    it('Retorna erro para id inválido', async function () {
      sinon.stub(frutasModel, 'findById').resolves(null);
  
      const result = await frutasService.findById(99);
  
      expect(result.status).to.be.equal('NOT_FOUND');
      expect(result.data).to.be.deep.equal({ message: 'Fruta não encontrada' });
    });
  });

  afterEach(function () {
    sinon.restore();
  }); 
});