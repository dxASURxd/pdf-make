import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import PdfPrinter from 'pdfmake';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

// TODO
// Esto sera  optimizado despues

const fonts = { // Defincion de las fuentes
    Roboto: {
        normal: './fonts/Roboto-Regular.ttf',
        bold:'./fonts/Roboto-Medium.ttf',
        italics: './fonts/Roboto-Italic.ttf',
        bolditalics: './fonts/Roboto-MediumItalic.ttf'
    }
};

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
    private readonly logger = new Logger('BasicReportsService');
    async onModuleInit() {
        await this.$connect();
        this.logger.log('conectado a la base de datos')
    }

    hello() {

        const printer = new PdfPrinter(fonts); // Definicion de la creación de la impresora

        const constDefunition: TDocumentDefinitions = { ///
            content: [ 'ola mundo' ]                    /// PDF generado
        }                                               ///

        const doc = printer.createPdfKitDocument(constDefunition) // Se crea el PDF basado en el "docDefinition"

        return doc; // Se regresa el "documentDefinition"
    }
}
