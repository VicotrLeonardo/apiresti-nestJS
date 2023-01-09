/* eslint-disable prettier/prettier */
import { Controller, Get, Put, Res, Req } from '@nestjs/common';
import { Campo } from '../../interfaces/fields.interface';

@Controller('form-config')
export class FormConfigController {
  private readonly campos: Campo[] = [];

  @Get()
  getConfig(@Res() res) {
    res.send(this.campos);
  }

  @Put()
  putConfig(@Req() req, @Res() res) {
    console.log('>>>reqbody : ', req.body);
  }
}
