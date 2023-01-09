import { Controller, Get, Res } from '@nestjs/common';
import { Campo } from '../../interfaces/fields.interface';

@Controller('form-config')
export class FormConfigController {
  private readonly campos: Campo[] = [
    {
      "id":1,
      "name": "model",
      "label": "Modelo",
      "required": false,
      "type": "text"
    },
    {
      "id":2,
      "name": "year",
      "label": "Ano",
      "required": false,
      "type": "number"
    },
    {
      "id":3,
      "name": "color",
      "label": "Cor",
      "required": false,
      "type": "text"
    }
  ];

  @Get()
  getConfig(@Res() res) {
    res.send(this.campos);
  }
}