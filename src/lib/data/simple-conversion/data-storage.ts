import Big from "big.js";
import { isFloatRegex } from "lib/utils/regex";
import { ConversionCategory, ConversionSection } from "types/conversion-types";

const getDataStorageCalcData = (): ConversionCategory => {

    const sections: ConversionSection[] = [

        {
            id: "bit", items: [
                // Bit
                {
                    id: 'bit',
                    label: 'data-storage.bit.label',
                    short: 'data-storage.bit.short',
                    convertFromGeneric: (arg: string) => { return arg; },
                    convertToGeneric: (arg: string) => { return arg; }
                },
            ]
        },
        {
            id: "decimal", label: 'group.decimal', items: [

                // Kilobit
                {
                    id: 'kilobit',
                    label: 'data-storage.kilobit.label',
                    short: 'data-storage.kilobit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1000).toString() }
                },

                // Kilobyte
                {
                    id: 'kilobyte',
                    label: 'data-storage.kilobyte.label',
                    short: 'data-storage.kilobyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8000).toString() }
                },

                // Megabit
                {
                    id: 'megabit',
                    label: 'data-storage.megabit.label',
                    short: 'data-storage.megabit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000).toString() }
                },

                // Megabyte
                {
                    id: 'megabyte',
                    label: 'data-storage.megabyte.label',
                    short: 'data-storage.megabyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8_000_000).toString() }
                },

                // Gigabit
                {
                    id: 'gigabit',
                    label: 'data-storage.gigabit.label',
                    short: 'data-storage.gigabit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000).toString() }
                },

                // Gigabyte
                {
                    id: 'gigabyte',
                    label: 'data-storage.gigabyte.label',
                    short: 'data-storage.gigabyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8_000_000_000).toString() }
                },

                // Terabit
                {
                    id: 'terabit',
                    label: 'data-storage.terabit.label',
                    short: 'data-storage.terabit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000_000).toString() }
                },

                // Terabyte
                {
                    id: 'terabyte',
                    label: 'data-storage.terabyte.label',
                    short: 'data-storage.terabyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8_000_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8_000_000_000_000).toString() }
                },

                // Petabit
                {
                    id: 'petabit',
                    label: 'data-storage.petabit.label',
                    short: 'data-storage.petabit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_000_000_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_000_000_000_000_000).toString() }
                },

                // Petabyte
                {
                    id: 'petabyte',
                    label: 'data-storage.petabyte.label',
                    short: 'data-storage.petabyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8_000_000_000_000_000).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8_000_000_000_000_000).toString() }
                },

                // Exabit
                {
                    id: 'exabit',
                    label: 'data-storage.exabit.label',
                    short: 'data-storage.exabit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div('1000000000000000').toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul('1000000000000000').toString() }
                },

                // Exabyte
                {
                    id: 'exabyte',
                    label: 'data-storage.exabyte.label',
                    short: 'data-storage.exabyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div('8000000000000000').toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul('8000000000000000').toString() }
                },

                // Zettabit
                {
                    id: 'zettabit',
                    label: 'data-storage.zettabit.label',
                    short: 'data-storage.zettabit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div('1000000000000000000').toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul('1000000000000000000').toString() }
                },

                // Zettabyte
                {
                    id: 'zettabyte',
                    label: 'data-storage.zettabyte.label',
                    short: 'data-storage.zettabyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div('8000000000000000000').toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul('8000000000000000000').toString() }
                },

            ]
        },
        {
            id: 'binary', label: 'group.binary', items: [

                // Byte
                {
                    id: 'byte',
                    label: 'data-storage.byte.label',
                    short: 'data-storage.byte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8).toString() }
                },

                // Kibibit
                {
                    id: 'kibibit',
                    label: 'data-storage.kibibit.label',
                    short: 'data-storage.kibibit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1024).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1024).toString() }
                },

                // Kibibyte
                {
                    id: 'kibibyte',
                    label: 'data-storage.kibibyte.label',
                    short: 'data-storage.kibibyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8192).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8192).toString() }
                },

                // Mebibit
                {
                    id: 'mebibit',
                    label: 'data-storage.mebibit.label',
                    short: 'data-storage.mebibit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_048_576).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_048_576).toString() }
                },

                // Mebibyte
                {
                    id: 'mebibyte',
                    label: 'data-storage.mebibyte.label',
                    short: 'data-storage.mebibyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8_388_608).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8_388_608).toString() }
                },

                // Gibibit
                {
                    id: 'gibibit',
                    label: 'data-storage.gibibit.label',
                    short: 'data-storage.gibibit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_073_741_824).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_073_741_824).toString() }
                },

                // Gibibyte
                {
                    id: 'gibibyte',
                    label: 'data-storage.gibibyte.label',
                    short: 'data-storage.gibibyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8_589_934_592).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8_589_934_592).toString() }
                },

                // Tebibit
                {
                    id: 'tebibit',
                    label: 'data-storage.tebibit.label',
                    short: 'data-storage.tebibit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_099_511_627_776).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_099_511_627_776).toString() }
                },

                // Tebibyte
                {
                    id: 'tibibyte',
                    label: 'data-storage.tebibyte.label',
                    short: 'data-storage.tebibyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(8_796_093_022_208).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(8_796_093_022_208).toString() }
                },

                // Pebibit
                {
                    id: 'pebibit',
                    label: 'data-storage.pebibit.label',
                    short: 'data-storage.pebibit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div(1_125_899_906_842_624).toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul(1_125_899_906_842_624).toString() }
                },

                // Pebibyte
                {
                    id: 'pebibyte',
                    label: 'data-storage.pebibyte.label',
                    short: 'data-storage.pebibyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div('9007199254740992').toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul('9007199254740992').toString() }
                },

                // Exbibit
                {
                    id: 'exbibit',
                    label: 'data-storage.exbibit.label',
                    short: 'data-storage.exbibit.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div('1152921504606846976').toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul('1152921504606846976').toString() }
                },

                // Exbibyte
                {
                    id: 'exbibyte',
                    label: 'data-storage.exbibyte.label',
                    short: 'data-storage.exbibyte.short',
                    convertFromGeneric: (arg: string) => { return new Big(arg).div('9223372036854775808').toString() },
                    convertToGeneric: (arg: string) => { return new Big(arg).mul('9223372036854775808').toString() }
                },
            ]
        }
    ];

    const data: ConversionCategory = {
        sections: sections,
        initialUnit: 'bit',
        options: {
            categoryIsInputValid: (arg: string) => isFloatRegex(arg),
        }
    }

    return data;

}

export default getDataStorageCalcData;