import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getWeightCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "metric", label: 'group.metric', items: [

                // Micrograms
                {
                    id: 'microgram',
                    label: 'weight.microgram.label',
                    short: 'weight.microgram.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.000001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.000001).toString() }
                },

                // Milligrams
                {
                    id: 'milligram',
                    label: 'weight.milligram.label',
                    short: 'weight.milligram.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.001).toString() }
                },

                // Centigrams
                {
                    id: 'centigram',
                    label: 'weight.centigram.label',
                    short: 'weight.centigram.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.01).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.01).toString() }
                },

                // Decigrams
                {
                    id: 'decigram',
                    label: 'weight.decigram.label',
                    short: 'weight.decigram.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.1).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.1).toString() }
                },

                // Grams
                {
                    id: 'gram',
                    label: 'weight.gram.label',
                    short: 'weight.gram.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Kilograms
                {
                    id: 'kilogram',
                    label: 'weight.kilogram.label',
                    short: 'weight.kilogram.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1000).toString() }
                },

                // Tons
                {
                    id: 'ton-metric',
                    label: 'weight.ton-metric.label',
                    short: 'weight.ton-metric.short',
                    append: 'weight.ton-metric.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000).toString() }
                },
            ]
        },
        {
            id: "imperial", label: 'group.imperial', items: [

                // Ounce
                {
                    id: 'ounce',
                    label: 'weight.ounce.label',
                    short: 'weight.ounce.short',
                    convertFromGeneric: (arg: string) => {
                        const fraction = new Big(1).div(16);
                        const inPounds = new Big(arg).div(453.59237);
                        return new Big(inPounds).div(fraction).toString()
                    },
                    convertToGeneric: (arg: string) => {
                        const fraction = new Big(1).div(16);
                        const inPounds = new Big(arg).mul(fraction);
                        return new Big(inPounds).mul(453.59237).toString()
                    }
                },

                // Pound
                {
                    id: 'pound',
                    label: 'weight.pound.label',
                    short: 'weight.pound.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(453.59237).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(453.59237).toString() }
                },

            ]
        },
        {
            id: "us", label: 'group.us', items: [

                // Short Ton
                {
                    id: 'short-ton',
                    label: 'weight.short-ton.label',
                    short: 'weight.short-ton.short',
                    append: 'weight.short-ton.append',
                    convertFromGeneric: (arg: string) => {
                        const inPounds = new Big(arg).div(453.59237);
                        return new Big(inPounds).div(2000).toString()
                    },
                    convertToGeneric: (arg: string) => {
                        const inPounds = new Big(arg).mul(2000);
                        return new Big(inPounds).mul(453.59237).toString()
                    }
                },
            ]
        },
        {
            id: "uk", label: 'group.uk', items: [

                // Stone
                {
                    id: 'stone',
                    label: 'weight.stone.label',
                    short: 'weight.stone.short',
                    convertFromGeneric: (arg: string) => {
                        const inPounds = new Big(arg).div(453.59237);
                        return new Big(inPounds).div(14).toString()
                    },
                    convertToGeneric: (arg: string) => {
                        const inPounds = new Big(arg).mul(14);
                        return new Big(inPounds).mul(453.59237).toString()
                    }
                },

                // Long Ton
                {
                    id: 'long-ton',
                    label: 'weight.long-ton.label',
                    short: 'weight.long-ton.short',
                    append: 'weight.long-ton.append',
                    convertFromGeneric: (arg: string) => {
                        const inPounds = new Big(arg).div(453.59237);
                        return new Big(inPounds).div(2240).toString()
                    },
                    convertToGeneric: (arg: string) => {
                        const inPounds = new Big(arg).mul(2240);
                        return new Big(inPounds).mul(453.59237).toString()
                    }
                },
            ]
        },
        {
            id: "others", label: 'group.others', items: [

                // Carat
                {
                    id: 'carat',
                    label: 'weight.carat.label',
                    short: 'weight.carat.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(5).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.2).toString() }
                },

            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'gram',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getWeightCalcData;