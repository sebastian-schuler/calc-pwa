import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getEnergyCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "standard", label: 'group.standard', items: [

                // Joule
                {
                    id: 'joule',
                    label: 'energy.joule.label',
                    short: 'energy.joule.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Kilo joule
                {
                    id: 'kilo-joule',
                    label: 'energy.kilo-joule.label',
                    short: 'energy.kilo-joule.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000).toString() }
                },

                // Watt hour
                {
                    id: 'watt-hour',
                    label: 'energy.watt-hour.label',
                    short: 'energy.watt-hour.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(3_600).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(3_600).toString() }
                },

                // Kilo watt hour
                {
                    id: 'kilo-watt-hour',
                    label: 'energy.kilo-watt-hour.label',
                    short: 'energy.kilo-watt-hour.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(3_600_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(3_600_000).toString() }
                },

                // Gram calorie
                {
                    id: 'small-calorie',
                    label: 'energy.small-calorie.label',
                    short: 'energy.small-calorie.short',
                    append: 'energy.small-calorie.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(4.184).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(4.184).toString() }
                },

                // Large Calorie
                {
                    id: 'large-calorie',
                    label: 'energy.large-calorie.label',
                    short: 'energy.large-calorie.short',
                    append: 'energy.large-calorie.append',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(4184).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(4184).toString() }
                },


            ]
        },
        {
            id: 'others', label: 'group.others', items: [

                // Electronvolt
                {
                    id: 'electronvolt',
                    label: 'energy.electronvolt.label',
                    short: 'energy.electronvolt.short',
                    convertFromGeneric: (arg: string) => {
                        return new Big(arg).div(1.602176634e-19).toString()
                    },
                    convertToGeneric: (arg: string) => {
                        return new Big(arg).mul(1.602176634e-19).toString()
                    }
                },

                // British thermal unit
                {
                    id: 'british-thermal',
                    label: 'energy.british-thermal.label',
                    short: 'energy.british-thermal.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1055.056).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1055.056).toString() }
                },

            ]
        }
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'joule',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getEnergyCalcData;