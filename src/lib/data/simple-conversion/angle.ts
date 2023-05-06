import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getAngleCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "all", items: [

                // Degree
                {
                    id: 'degree',
                    label: 'angle.degree.label',
                    short: 'angle.degree.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Radian
                {
                    id: 'radian',
                    label: 'angle.radian.label',
                    short: 'angle.radian.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(Math.PI).div(180).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(180).div(Math.PI).toString() }
                },

                // Turn
                {
                    id: 'turn',
                    label: 'angle.turn.label',
                    short: 'angle.turn.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(360).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(360).toString() }
                },

                // Gradian
                {
                    id: 'gradian',
                    label: 'angle.gradian.label',
                    short: 'angle.gradian.short',
                    convertFromGeneric: (arg: string) => {
                        const multiplier = new Big(10).div(9);
                        return new Big(arg).mul(multiplier).toString(); // angle in gradians = angle in degrees x 10 / 9
                    },
                    convertToGeneric: (arg: string) => {
                        const multiplier = new Big(9).div(10);
                        return new Big(arg).mul(multiplier).toString(); // angle in degrees = angle in gradians x 9 / 10
                    }
                },

                // Second
                {
                    id: 'second',
                    label: 'angle.second.label',
                    short: 'angle.second.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(3600).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(3600).toString() }
                },

                // Minute
                {
                    id: 'minute',
                    label: 'angle.minute.label',
                    short: 'angle.minute.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(60).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(60).toString() }
                },

            ]
        }
    ]

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'degree',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;
}

export default getAngleCalcData;