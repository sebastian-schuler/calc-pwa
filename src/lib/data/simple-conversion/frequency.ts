import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getFrequencyCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "standard", label: 'Standard', items: [

                // Hertz
                {
                    id: 'hertz',
                    label: 'frequency.hertz.label',
                    short: 'frequency.hertz.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Kilohertz
                {
                    id: 'kilo-hertz',
                    label: 'frequency.kilo-hertz.label',
                    short: 'frequency.kilo-hertz.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000).toString() }
                },

                // Megahertz
                {
                    id: 'mega-hertz',
                    label: 'frequency.mega-hertz.label',
                    short: 'frequency.mega-hertz.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000).toString() }
                },

                // Gigahertz
                {
                    id: 'giga-hertz',
                    label: 'frequency.giga-hertz.label',
                    short: 'frequency.giga-hertz.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000).toString() }
                },

                // Terahertz
                {
                    id: 'tera-hertz',
                    label: 'frequency.tera-hertz.label',
                    short: 'frequency.tera-hertz.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000_000).toString() }
                },

                // Petahertz
                {
                    id: 'peta-hertz',
                    label: 'frequency.peta-hertz.label',
                    short: 'frequency.peta-hertz.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000_000_000).toString() }
                },
            ]
        }
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'hertz',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getFrequencyCalcData;