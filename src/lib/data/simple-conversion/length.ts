import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getLengthCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "metric", label: 'group.metric', items: [

                // Nanometers
                {
                    id: 'nanometer',
                    label: 'length.nanometer.label',
                    short: 'length.nanometer.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.0000001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.0000001).toString() }
                },

                // Micrometers
                {
                    id: 'micrometer',
                    label: 'length.micrometer.label',
                    short: 'length.micrometer.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.0001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.0001).toString() }
                },

                // Millimeters
                {
                    id: 'millimeter',
                    label: 'length.millimeter.label',
                    short: 'length.millimeter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.1).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.1).toString() }
                },

                // Centimeters
                {
                    id: 'centimeter',
                    label: 'length.centimeter.label',
                    short: 'length.centimeter.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Meters
                {
                    id: 'meter',
                    label: 'length.meter.label',
                    short: 'length.meter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(100).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(100).toString() }
                },

                // Kilometers
                {
                    id: 'kilometer',
                    label: 'length.kilometer.label',
                    short: 'length.kilometer.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(100_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(100_000).toString() }
                },
            ]
        },
        {
            id: "imperial", label: 'group.imperial', items: [

                // Inches
                {
                    id: 'inch',
                    label: 'length.inch.label',
                    short: 'length.inch.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(2.54).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(2.54).toString() }
                },

                // Feet
                {
                    id: 'foot',
                    label: 'length.foot.label',
                    short: 'length.foot.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(30.48).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(30.48).toString() }
                },

                // Yards
                {
                    id: 'yard',
                    label: 'length.yard.label',
                    short: 'length.yard.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(91.44).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(91.44).toString() }
                },

                // Miles
                {
                    id: 'mile',
                    label: 'length.mile.label',
                    short: 'length.mile.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(160_934.4).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(160_934.4).toString() }
                },
            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'meter',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getLengthCalcData;