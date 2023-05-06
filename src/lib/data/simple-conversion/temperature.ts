import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getTemperatureCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "all", items: [

                // Celsius
                {
                    id: 'celsius',
                    label: 'temperature.celsius.label',
                    short: 'temperature.celsius.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Kelvin
                {
                    id: 'kelvin',
                    label: 'temperature.kelvin.label',
                    short: 'temperature.kelvin.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).add(273.15).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).minus(273.15).toString() }
                },

                // Fahrenheit
                {
                    id: 'fahrenheit',
                    label: 'temperature.fahrenheit.label',
                    short: 'temperature.fahrenheit.short',
                    convertFromGeneric: (arg: string) => {
                        const left = new Big(9).div(5).mul(arg);
                        return new Big(left).plus(32).toString() // °F = °C × 9/5 + 32
                    },
                    convertToGeneric: (arg: string) => {
                        const left = new Big(arg).minus(32);
                        const right = new Big(5).div(9);
                        return new Big(left).mul(right).toString(); // °C = (°F - 32) × 5/9
                    }
                },

                // Rankine
                {
                    id: 'rankine',
                    label: 'temperature.rankine.label',
                    short: 'temperature.rankine.short',
                    convertFromGeneric: (arg: string) => {
                        const nineDivFive = new Big(9).div(5);
                        const bracket = new Big(arg).plus(273.15).mul(nineDivFive);
                        return bracket.toString(); // Rankine = (Celsius + 273.15) × 9/5
                    },
                    convertToGeneric: (arg: string) => {
                        const fiveDivNine = new Big(5).div(9);
                        const bracket = new Big(arg).minus(491.67).mul(fiveDivNine);
                        return bracket.toString(); // Celsius = (Rankine - 491.67) × 5/9
                    }
                },

                // Réaumur
                {
                    id: 'reaumur',
                    label: 'temperature.reaumur.label',
                    short: 'temperature.reaumur.short',
                    convertFromGeneric: (arg: string) => {
                        const multiplier = new Big(4).div(5);
                        return new Big(arg).mul(multiplier).toString(); // Réaumur = Celsius × 4/5
                    },
                    convertToGeneric: (arg: string) => {
                        const multiplier = new Big(5).div(4);
                        return new Big(arg).mul(multiplier).toString(); // °C = Réaumur × 5/4
                    }
                },
            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'celsius',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getTemperatureCalcData;