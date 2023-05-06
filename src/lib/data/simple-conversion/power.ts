import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getPowerCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "metric", label: 'group.metric', items: [

                // Nanowatt
                {
                    id: 'nanowatt',
                    label: 'power.nanowatt.label',
                    short: 'power.nanowatt.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.000_000_001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.000_000_001).toString() }
                },

                // Microwatt
                {
                    id: 'microwatt',
                    label: 'power.microwatt.label',
                    short: 'power.microwatt.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.000_001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.000_001).toString() }
                },

                // Milliwatt
                {
                    id: 'milliwatt',
                    label: 'power.milliwatt.label',
                    short: 'power.milliwatt.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.001).toString() }
                },

                // Centiwatt
                {
                    id: 'centiwatt',
                    label: 'power.centiwatt.label',
                    short: 'power.centiwatt.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.01).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.01).toString() }
                },

                // Watt
                {
                    id: 'watt',
                    label: 'power.watt.label',
                    short: 'power.watt.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Kilowatt
                {
                    id: 'kilowatt',
                    label: 'power.kilowatt.label',
                    short: 'power.kilowatt.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000).toString() }
                },

                // Megawatt
                {
                    id: 'megawatt',
                    label: 'power.megawatt.label',
                    short: 'power.megawatt.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000).toString() }
                },

                // Gigawatt
                {
                    id: 'gigawatt',
                    label: 'power.gigawatt.label',
                    short: 'power.gigawatt.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000).toString() }
                },

                // Terawatt
                {
                    id: 'terawatt',
                    label: 'power.terawatt.label',
                    short: 'power.terawatt.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000_000).toString() }
                },

                // Petawatt
                {
                    id: 'Petawatt',
                    label: 'power.petawatt.label',
                    short: 'power.petawatt.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000_000_000).toString() }
                },

                // Horsepower (metric)
                {
                    id: 'horsepower-metric',
                    label: 'power.horsepower-metric.label',
                    short: 'power.horsepower-metric.short',
                    append: 'power.horsepower-metric.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(735.5).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(735.5).toString() }
                }
            ]
        },
        {
            id: "imperial", label: 'group.imperial', items: [

                // Horsepower (imperial)
                {
                    id: 'horsepower-imperial',
                    label: 'power.horsepower-imperial.label',
                    short: 'power.horsepower-imperial.short',
                    append: 'power.horsepower-imperial.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(745.7).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(745.7).toString() }
                }
            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'watt',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getPowerCalcData;