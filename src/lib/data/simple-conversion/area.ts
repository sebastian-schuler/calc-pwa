import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getAreaCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "metric", label: 'group.metric', items: [

                // Square Millimeters
                {
                    id: 'sq-millimeter',
                    label: 'area.sq-millimeter.label',
                    short: 'area.sq-millimeter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.01).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.01).toString() }
                },

                // Square Centimeters
                {
                    id: 'sq-centimeter',
                    label: 'area.sq-centimeter.label',
                    short: 'area.sq-centimeter.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Square Meters
                {
                    id: 'sq-meter',
                    label: 'area.sq-meter.label',
                    short: 'area.sq-meter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(10_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(10_000).toString() }
                },

                // Square Kilometers
                {
                    id: 'sq-kilometer',
                    label: 'area.sq-kilometer.label',
                    short: 'area.sq-kilometer.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(10_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(10_000_000_000).toString() }
                },

                // Hectares
                {
                    id: 'hectare',
                    label: 'area.hectare.label',
                    short: 'area.hectare.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(100_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(100_000_000).toString() }
                }
            ]
        },
        {
            id: "imperial", label: 'group.imperial', items: [

                // Square Inches
                {
                    id: 'sq-inch',
                    label: 'area.sq-inch.label',
                    short: 'area.sq-inch.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(6.4516).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(6.4516).toString() }
                },

                // Square Feet
                {
                    id: 'sq-foot',
                    label: 'area.sq-foot.label',
                    short: 'area.sq-foot.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(929.0304).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(929.0304).toString() }
                },

                // Square Yards
                {
                    id: 'sq-yard',
                    label: 'area.sq-yard.label',
                    short: 'area.sq-yard.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8361.2736).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8361.2736).toString() }
                },

                // Square Miles
                {
                    id: 'sq-mile',
                    label: 'area.sq-mile.label',
                    short: 'area.sq-mile.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(25_899_881_103.36).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(25_899_881_103.36).toString() }
                },

                // Acres
                {
                    id: 'acre',
                    label: 'area.acre.label',
                    short: 'area.acre.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(40_468_564.224).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(40_468_564.224).toString() }
                },
            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'sq-meter',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getAreaCalcData;