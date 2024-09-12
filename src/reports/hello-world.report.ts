import type { TDocumentDefinitions } from "pdfmake/interfaces";

interface ReportToptions {
    name: string
}

export const getHelloWorldReport = (options: ReportToptions): TDocumentDefinitions => {

    const { name } = options

    const constDefunition: TDocumentDefinitions = {
        content: [`Hola ${name}`],
    }

    return constDefunition;
}