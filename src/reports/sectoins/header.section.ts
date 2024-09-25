import { Content } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers";

interface HeaderOptions {
    title?: string;
    subtitle?: string;
    showLogo?: boolean;
    showDate?: boolean;
}

const logo: Content = {
    image: 'src/assets/img/tucan-code-logo.png',
    width: 100,
    height: 100,
    alignment: 'center',
    margin: [0, 20]
}

export const headerSectoin = (options: HeaderOptions): Content => {
    const { title, subtitle, showLogo = true, showDate = true } = options;

    const headerLogo: Content = showLogo ? logo : null;
    const headerDate: Content = showDate ? {
        text: DateFormatter.getDDMMMMYYY(new Date()),
        alignment: "right",
        margin: [0, 20, 0, 20],
    } : null;

    return {
        columns: [
            headerLogo,
            headerDate,
        ]
    }
}