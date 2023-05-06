import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getForceCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "standard", label: 'Standard', items: [

                // Newton
                {
                    id: 'newton',
                    label: 'force.newton.label',
                    short: 'force.newton.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Kilonewton
                {
                    id: 'kilo-newton',
                    label: 'force.kilo-newton.label',
                    short: 'force.kilo-newton.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000).toString(); }
                },
            ]
        },
        {
            id: "metric", label: 'Metric', items: [

                // Kilogram-force
                {
                    id: 'kilogram-force',
                    label: 'force.kilogram-force.label',
                    short: 'force.kilogram-force.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(9.806_65).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(9.806_65).toString(); }
                },

                // Ton-force (metric)
                {
                    id: 'ton-force-metric',
                    label: 'force.ton-force-metric.label',
                    short: 'force.ton-force-metric.short',
                    append: 'force.ton-force-metric.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(9_806.65).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(9_806.65).toString(); }
                },
            ]
        },
        {
            id: "imperial", label: 'group.imperial', items: [

                // Pound-force
                {
                    id: 'pound-force',
                    label: 'force.pound-force.label',
                    short: 'force.pound-force.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(4.448_221_615_260_5).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(4.448_221_615_260_5).toString(); }
                },

                // Kip
                {
                    id: 'kip-force',
                    label: 'force.kip-force.label',
                    short: 'force.kip-force.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(4.448_221_615_260_5).div(1_000).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(4.448_221_615_260_5).mul(1_000).toString(); }
                },
            ]
        },
        {
            id: "others", label: 'group.others', items: [

                // Dyne
                {
                    id: 'dyne',
                    label: 'force.dyne.label',
                    short: 'force.dyne.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(100_000).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(100_000).toString(); }
                },

            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'newton',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getForceCalcData;