import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getPressureCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "all", items: [

                // Pascal
                {
                    id: 'pascal',
                    label: 'pressure.pascal.label',
                    short: 'pressure.pascal.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Kilopascal
                {
                    id: 'kilopascal',
                    label: 'pressure.kilopascal.label',
                    short: 'pressure.kilopascal.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(0.001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(0.001).toString() }
                },

                // Bar
                {
                    id: 'bar',
                    label: 'pressure.bar.label',
                    short: 'pressure.bar.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(100_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(100_000).toString() }
                },

                // PSI
                {
                    id: 'psi',
                    label: 'pressure.psi.label',
                    short: 'pressure.psi.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(6894.757293178).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(6894.757293178).toString() }
                },

                // KSI
                {
                    id: 'ksi',
                    label: 'pressure.ksi.label',
                    short: 'pressure.ksi.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(6894757.293178).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(6894757.293178).toString() }
                },
            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'pascal',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getPressureCalcData;