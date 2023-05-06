import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getTimeCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [
        {
            id: "all", items: [

                // Nanosecond
                {
                    id: 'nanosecond',
                    label: 'time.nanosecond.label',
                    short: 'time.nanosecond.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(3_600_000_000_000).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(3_600_000_000_000).toString(); }
                },

                // Microsecond
                {
                    id: 'microsecond',
                    label: 'time.microsecond.label',
                    short: 'time.microsecond.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(3_600_000_000).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(3_600_000_000).toString(); }
                },

                // Millisecond
                {
                    id: 'millisecond',
                    label: 'time.millisecond.label',
                    short: 'time.millisecond.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(3_600_000).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(3_600_000).toString(); }
                },

                // Second
                {
                    id: 'second',
                    label: 'time.second.label',
                    short: 'time.second.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(3_600).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(3_600).toString(); }
                },

                // Minute
                {
                    id: 'minute',
                    label: 'time.minute.label',
                    short: 'time.minute.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).mul(60).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).div(60).toString(); }
                },

                // Hour
                {
                    id: 'hour',
                    label: 'time.hour.label',
                    short: 'time.hour.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },

                // Day
                {
                    id: 'day',
                    label: 'time.day.label',
                    short: 'time.day.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(24).toString(); },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(24).toString(); }
                },

                // Week
                {
                    id: 'week',
                    label: 'time.week.label',
                    short: 'time.week.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(168).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(168).toString() }
                },

                // Month
                {
                    id: 'month',
                    label: 'time.month.label',
                    short: 'time.month.short',
                    convertFromGeneric: (arg: string) => {
                        const hoursInMonth = new Big(365).div(12).mul(24);
                        return new Big(arg).div(hoursInMonth).toString()
                    },
                    convertToGeneric: (arg: string) => {
                        const hoursInMonth = new Big(365).div(12).mul(24);
                        return new Big(arg).mul(hoursInMonth).toString()
                    }
                },

                // Year
                {
                    id: 'year',
                    label: 'time.year.label',
                    short: 'time.year.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8760).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8760).toString() }
                },

                // Decade
                {
                    id: 'decade',
                    label: 'time.decade.label',
                    short: 'time.decade.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(87_600).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(87_600).toString() }
                },

                // Century
                {
                    id: 'century',
                    label: 'time.century.label',
                    short: 'time.century.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(876_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(876_000).toString() }
                },

                // Millennium
                {
                    id: 'millennium',
                    label: 'time.millennium.label',
                    short: 'time.millennium.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8_760_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8_760_000).toString() }
                },
            ]
        },
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'hour',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getTimeCalcData;