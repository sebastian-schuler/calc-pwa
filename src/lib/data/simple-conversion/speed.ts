import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getSpeedCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "metric", label: 'group.metric', items: [

                // Meter / second
                {
                    id: 'meter-second',
                    label: 'speed.meter-second.label',
                    short: 'speed.meter-second.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(3.6).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(3.6).toString() }
                },

                // Kilometer / hour
                {
                    id: 'kilometer-hour',
                    label: 'speed.kilometer-hour.label',
                    short: 'speed.kilometer-hour.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },
            ]
        },
        {
            id: "imperial", label: 'group.imperial', items: [

                // Foot / second
                {
                    id: 'foot-second',
                    label: 'speed.foot-second.label',
                    short: 'speed.foot-second.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(0.9113444159).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(0.9113444159).toString() }
                },

                // Miles / hour
                {
                    id: 'miles-hour',
                    label: 'speed.mile-hour.label',
                    short: 'speed.mile-hour.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(0.621371192).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(0.621371192).toString() }
                },
            ]
        },
        {
            id: "other", label: 'group.others', items: [

                // Knots
                {
                    id: 'knot',
                    label: 'speed.knot.label',
                    short: 'speed.knot.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1.852).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1.852).toString() }
                },

                // Mach
                {
                    id: 'mach',
                    label: 'speed.mach.label',
                    short: 'speed.mach.short',
                    description: 'speed.mach.description',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1225.044).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1225.044).toString() }
                },
            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'kilometer-hour',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getSpeedCalcData;