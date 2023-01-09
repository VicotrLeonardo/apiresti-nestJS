/* eslint-disable prettier/prettier */
import { FormConfigController } from './form-config.controller';

describe('FormConfigController', () => {
  let formConfigController: FormConfigController;
  let res: any;

  beforeEach(async () => {
    formConfigController = new FormConfigController();
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };
  });

  describe('getConfig', () => {
    it('should return the config when it exists', async () => {
      // Arrange
      const expectedResult = [
        {
          id: 1,
          name: 'model',
          label: 'Modelo',
          required: false,
          type: 'text',
        },
        { id: 2, name: 'year', label: 'Ano', required: false, type: 'number' },
        { id: 3, name: 'color', label: 'Cor', required: false, type: 'text' },
      ];

      // Act
      await formConfigController.getConfig(res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expectedResult);
    });

    it('should return a 500 status code and an error message when the config is not found', async () => {
      // Arrange
      formConfigController = new FormConfigController();
      res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };

      // Act
      await formConfigController.getConfig(res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Não deu certo');
    });
  });
});
