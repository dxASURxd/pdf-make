import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmployementLetterReport, getHelloWorldReport } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
    private readonly logger = new Logger('BasicReportsService');
    async onModuleInit() {
        await this.$connect();
        this.logger.log('conectado a la base de datos')
    }
    constructor(private readonly printerSertive: PrinterService) {
        super();
    }

    hello() {
        const docDefinition = getHelloWorldReport({
            name: 'asur owo',
        });

        const doc = this.printerSertive.createPdf(docDefinition);
        return doc;
    }

    employmentLetter() {
        const docDefinition =  getEmployementLetterReport()

        const doc = this.printerSertive.createPdf(docDefinition);
        return doc;
    }
}
