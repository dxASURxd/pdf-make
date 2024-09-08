import { Controller, Get, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) { }

  @Get()
  hello(@Res() response: Response) {   // Basado en el response, establecemos la respuesta como nuestro PDF
    const pdfDoc = this.basicReportsService.hello();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Holamundo.pdf'
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
