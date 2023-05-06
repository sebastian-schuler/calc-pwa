import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getNumbersCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "all", items: [

                // Decimal
                {
                    id: 'base10',
                    label: 'numbers.decimal.label',
                    short: 'numbers.decimal.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; },
                    isInputValid: (arg: string) => {
                        return /^[0-9]+$/.test(arg);
                    }
                },

                // Binary
                {
                    id: 'base2',
                    label: 'numbers.binary.label',
                    short: 'numbers.binary.short',
                    convertFromGeneric: (arg: string) => {
                        return Number(arg).toString(2);
                    },
                    convertToGeneric: (arg: string) => {
                        try {
                            return parseInt(arg, 2).toString();
                        } catch (error) {
                            console.log(arg, error);
                            return "0";
                        }
                    },
                    isInputValid: (arg: string) => {
                        return /^[01]+$/.test(arg);
                    }
                },

                // Hexadecimal
                {
                    id: 'base16',
                    label: 'numbers.hexadecimal.label',
                    short: 'numbers.hexadecimal.short',
                    convertFromGeneric: (arg: string) => {
                        if (arg === '0') return '0';
                        return Number(arg).toString(16).padStart(2, '0')
                    },
                    convertToGeneric: (arg: string) => {
                        console.log(arg);
                        if (!/^[0-9A-Fa-f]+$/.test(arg)) return '0';
                        return parseInt(arg, 16).toString();
                    },
                    isInputValid: (arg: string) => {
                        return /^[0-9A-Fa-f]+$/.test(arg);
                    },
                    options: {
                        format: 'HEX'
                    }
                },

                // Octal
                {
                    id: 'base8',
                    label: 'numbers.octal.label',
                    short: 'numbers.octal.short',
                    convertFromGeneric: (arg: string) => {
                        if (arg === '0') return '0';
                        return Number(arg).toString(8);
                    },
                    convertToGeneric: (arg: string) => {
                        if (!/^[0-7]+$/.test(arg)) return '0';
                        return parseInt(arg, 8).toString();
                    },
                    isInputValid: (arg: string) => {
                        return /^[0-7]+$/.test(arg);
                    }
                },
            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'base10',
        options: {
            skipStringFormatting: true,
            shouldClearInputOnUnitChange: true
        }
    }

    return data;
}

export default getNumbersCalcData;