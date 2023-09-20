const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const { frutasModel } = require('../../../src/models');
const { allFrutas, oneFruta, newFruta } = require('../../mocks/frutasMocks');
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

  describe('Verifica se é possível criar uma nova fruta', function () {
    it('Deve retornar a criação de uma fruta', async function () {
      sinon.stub(frutasModel, 'insert').resolves(4);

      const result = await frutasService.insert('AMEIXA');

      expect(result.status).to.be.equal('SUCCESSFUL');
      expect(result.data).to.be.deep.equal({ frutaId: 4, ...newFruta });
    });

    it('Deve retornar erro caso não venha um nome', async function () {
      sinon.stub(frutasModel, 'insert').rejects(new Error());

      const result = await frutasService.insert();

      expect(result.status).to.be.equal('BAD_REQUEST');
      expect(result.data).to.be.deep.equal({ message: 'É necessário inserir um "nome"' });
    });

    it('Deve retornar erro caso nome tenha menos que 2 caracteres', async function () {
      sinon.stub(frutasModel, 'insert').rejects(new Error());

      const result = await frutasService.insert('r');

      expect(result.status).to.be.equal('INVALID_VALUE');
      expect(result.data).to.be.deep.equal(
        { message: 'O "nome" deve ter pelo menos 2 caracteres' },
        );
    });
  });

  afterEach(function () {
    sinon.restore();
  }); 
});