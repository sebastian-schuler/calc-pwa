import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getVolumeCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "metric", label: 'group.metric', items: [

                // Milliliter
                {
                    id: 'milliliter',
                    label: 'volume.milliliter.label',
                    short: 'volume.milliliter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.001).toString() }
                },

                // Centiliter
                {
                    id: 'centiliter',
                    label: 'volume.centiliter.label',
                    short: 'volume.centiliter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.01).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.01).toString() }
                },

                // Deciliter
                {
                    id: 'deciliter',
                    label: 'volume.deciliter.label',
                    short: 'volume.deciliter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.1).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.1).toString() }
                },

                // Liter
                {
                    id: 'liter',
                    label: 'volume.liter.label',
                    short: 'volume.liter.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Cubic Centimeter
                {
                    id: 'cubic-centimeter',
                    label: 'volume.cubic-centimeter.label',
                    short: 'volume.cubic-centimeter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.001).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.001).toString() }
                },

                // Cubic Meter
                {
                    id: 'cubic-meter',
                    label: 'volume.cubic-meter.label',
                    short: 'volume.cubic-meter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000).toString() }
                },

                // Cubic Kilometer
                {
                    id: 'cubic-kilometer',
                    label: 'volume.cubic-kilometer.label',
                    short: 'volume.cubic-kilometer.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000_000).toString() }
                },
            ]
        },
        {
            id: "imperial", label: 'group.imperial', items: [

                // Cubic Inches
                {
                    id: 'cubic-inch',
                    label: 'volume.cubic-inch.label',
                    short: 'volume.cubic-inch.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(61.0237441).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(61.0237441).toString() }
                },

                // Cubic Foot
                {
                    id: 'cubic-foot',
                    label: 'volume.cubic-foot.label',
                    short: 'volume.cubic-foot.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(28.3168466).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(28.3168466).toString() }
                },

                // Cubic Yard
                {
                    id: 'cubic-yard',
                    label: 'volume.cubic-yard.label',
                    short: 'volume.cubic-yard.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(764.5548579).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(764.5548579).toString() }
                },

                // Fluid ounce (UK)
                {
                    id: 'fluid-ounce-uk',
                    label: 'volume.fluid-ounce-uk.label',
                    short: 'volume.fluid-ounce-uk.short',
                    append: 'volume.fluid-ounce-uk.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.0284131).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.0284131).toString() }
                },

                // Cup (UK)
                {
                    id: 'cup-uk',
                    label: 'volume.cup-uk.label',
                    short: 'volume.cup-uk.short',
                    append: 'volume.cup-uk.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.284130625).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.284130625).toString() }
                },

                // Pint (UK)
                {
                    id: 'pint-uk',
                    label: 'volume.pint-uk.label',
                    short: 'volume.pint-uk.short',
                    append: 'volume.pint-uk.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.5682613).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.5682613).toString() }
                },

                // Quart (UK)
                {
                    id: 'quart-uk',
                    label: 'volume.quart-uk.label',
                    short: 'volume.quart-uk.short',
                    append: 'volume.quart-uk.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1.1365225).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1.1365225).toString() }
                },

                // Gallon (UK)
                {
                    id: 'gallon-uk',
                    label: 'volume.gallon-uk.label',
                    short: 'volume.gallon-uk.short',
                    append: 'volume.gallon-uk.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(4.54609).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(4.54609).toString() }
                },
            ]
        },
        {
            id: "us", label: 'group.us', items: [

                // Fluid Ounce (US)
                {
                    id: 'fluid-ounce-us',
                    label: 'volume.fluid-ounce-us.label',
                    short: 'volume.fluid-ounce-us.short',
                    append: 'volume.fluid-ounce-us.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.0295735).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.0295735).toString() }
                },

                // Cup (US)
                {
                    id: 'cup-us',
                    label: 'volume.cup-us.label',
                    short: 'volume.cup-us.short',
                    append: 'volume.cup-us.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.2365882365).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.2365882365).toString() }
                },

                // Pint (US)
                {
                    id: 'pint-us',
                    label: 'volume.pint-us.label',
                    short: 'volume.pint-us.short',
                    append: 'volume.pint-us.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.4731765).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.4731765).toString() }
                },

                // Quart (US)
                {
                    id: 'quart-us',
                    label: 'volume.quart-us.label',
                    short: 'volume.quart-us.short',
                    append: 'volume.quart-us.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(0.9463529).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(0.9463529).toString() }
                },

                // Gallon (US)
                {
                    id: 'gallon-us',
                    label: 'volume.gallon-us.label',
                    short: 'volume.gallon-us.short',
                    append: 'volume.gallon-us.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(3.7854118).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(3.7854118).toString() }
                },
            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'cubic-meter',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getVolumeCalcData;