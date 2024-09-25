import { StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSectoin } from "./sectoins/header.section";

const styles: StyleDictionary = {
    header: {
        fontSize: 22,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 20],
    },
    body: {
        margin: [0, 70],
        alignment: 'justify',
    },
    signature: {
        fontSize: 14,
        bold: true,
    },
    footer: {
        fontSize: 10,
        alignment: 'center',
        italics: true,
        margin: [0, 0, 0, 20]
    }
}

// const logo: Content = {
//     image: 'src/assets/img/tucan-code-logo.png',
//     width: 100,
//     height: 100,
//     alignment: 'center',
//     margin: [0, 20]
// }

export const getEmployementLetterReport = (): TDocumentDefinitions => {
    const docDefinitions: TDocumentDefinitions = {
        styles: styles,
        // header: {
        //     columns: [
        //         logo,
        //         {
        //             text: DateFormatter.getDDMMMMYYY(new Date()),
        //             alignment: "right",
        //             margin: [0, 20, 0, 20],
        //         }
        //     ]
        // },
        header: headerSectoin({
        }),
        content: [
            {
                text: 'Constancia de empleo',
                style: 'header',
            },
            {
                text: `
                Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa], 
                por medio de la presente certifco que [Nombre del Empleado] ha sido empleado en nuestra 
                empresa desde el [Fecha de Inicio del Empleado]. \n\n
                Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del 
                Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus 
                labores.\n\n
                La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas 
                semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y 
                procedimientos establecidos por la empresa.\n\n
                Esta constancia se expide a solicitud del interesado para los fnes que considere conveniente.\n\n`,
                style: 'body',
            },
            { text: `Atentamente`, style: 'signature' },
            { text: `[Nombre del Empleador]`, style: 'signature' },
            { text: `[Cargo del Empleador]`, style: 'signature' },
            { text: `[Nombre de la Empresa]`, style: 'signature' },
            { text: `[Fecha de Emisión]`, style: 'signature' },
        ],
        footer: {
            text: `Este documento es una constancia de empleo y no representa un compromiso laboral.`,
            style: 'footer'
        }
    };

    return docDefinitions;
}