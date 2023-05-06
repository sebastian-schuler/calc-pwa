import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getFuelConsumptionCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "metric", label: 'group.metric', items: [

                // Meter / Liter
                {
                    id: 'meter-liter',
                    label: 'fuel-consumption.meter-liter.label',
                    short: 'fuel-consumption.meter-liter.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Kilometer / Liter
                {
                    id: 'kilometer-liter',
                    label: 'fuel-consumption.kilometer-liter.label',
                    short: 'fuel-consumption.kilometer-liter.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1000).toString() }
                }
            ]
        },
        {
            id: "uk", label: 'group.uk', items: [

                // Mile / Gallon (UK)
                {
                    id: 'mile-gallon-uk',
                    label: 'fuel-consumption.mile-gallon-uk.label',
                    short: 'fuel-consumption.mile-gallon-uk.short',
                    append: 'fuel-consumption.mile-gallon-uk.append',
                    convertFromGeneric: (arg: string) => {
                        const miles = new Big(1).div(1609.344);
                        const gallons = new Big(4.54609).div(1);
                        return new Big(arg).mul(miles).mul(gallons).toString();
                    },
                    convertToGeneric: (arg: string) => {
                        const km = new Big(1609.344).div(1);
                        const liter = new Big(1).div(4.54609);
                        return new Big(arg).mul(km).mul(liter).toString();
                    }
                },

            ]
        },
        {
            id: "us", label: 'group.us', items: [

                // Mile / Gallon (US)
                // https://www.youtube.com/watch?v=tCkNhshfXrU
                // https://www.youtube.com/watch?v=m-2FxU_Gryg
                {
                    id: 'mile-gallon-us',
                    label: 'fuel-consumption.mile-gallon-us.label',
                    short: 'fuel-consumption.mile-gallon-us.short',
                    append: 'fuel-consumption.mile-gallon-us.append',
                    convertFromGeneric: (arg: string) => {
                        const miles = new Big(1).div(1609.344);
                        const gallons = new Big(3.785411784).div(1);
                        return new Big(arg).mul(miles).mul(gallons).toString();
                    },
                    convertToGeneric: (arg: string) => {
                        const km = new Big(1609.344).div(1);
                        const liter = new Big(1).div(3.785411784);
                        return new Big(arg).mul(km).mul(liter).toString();
                    }
                },

            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'meter-liter',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getFuelConsumptionCalcData;