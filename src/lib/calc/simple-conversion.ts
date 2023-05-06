import Big from "big.js";
import { groupByToMap } from "lib/utils/utils";
import { ConversionCategory, ConversionItem, ConversionResult, ResultSection } from "types/conversion-types";

export const getSimpleConversionResult = (fromUnitId: string, value: string, data: ConversionCategory): ResultSection[] | undefined => {

  // If value is empty, set it to 0
  if (value.length === 0) value = '0';

  // Check if value is valid
  let invalidInput = false;
  if (data.options?.categoryIsInputValid && !data.options.categoryIsInputValid(value)) {
    invalidInput = true;
  };

  const sections = data.sections;
  type ConversionType = ConversionItem & { group: string | undefined | null, sectionId: string };

  // Collect all units in one array
  let units: ConversionType[] = [];
  for (const section of sections) {
    const arr = section.items.map((item) => ({ ...item, group: section.label, sectionId: section.id }))
    units.push(...arr);
  }

  // Get the unit we are converting from
  const fromUnitIndex = units.findIndex((unit) => unit.id === fromUnitId);

  // Convert to generic, if input is invalid, set to NaN
  let genericValue: string | undefined = "NaN";
  try {
    if (!invalidInput) {
      genericValue = units.at(fromUnitIndex)?.convertToGeneric(value);
    }
  } catch (error) {
    console.error('Invalid input at convertToGeneric', error);
  }
  if (genericValue === undefined) return undefined;

  // Remove the unit we are converting from
  units.splice(fromUnitIndex, 1);

  // Convert to generic
  let result: ConversionResult[] = [];
  for (const unit of units) {

    let convertedBig = new Big(0);
    let localized = 'NaN';

    // If input is valid
    if (!invalidInput) {
      try {

        if (unit.options?.format === 'HEX') {
          // Check for formatting options
          localized = unit.convertFromGeneric(genericValue).toUpperCase();

        } else {
          // Else, convert to number and format
          convertedBig = new Big(unit.convertFromGeneric(genericValue));

          // Format string unless disabled
          localized = data.options?.skipStringFormatting ? (
            convertedBig.toString()
          ) : (
            convertedBig.toNumber().toLocaleString('de-DE', { maximumFractionDigits: 5, minimumFractionDigits: 0 })
          );
        }
      } catch (error) {
        console.error('Invalid input at convertFromGeneric', error);
      }
    }

    result.push({
      unitId: unit.id,
      unitLabel: unit.label,
      unitShort: unit.short || undefined,
      unitAppend: unit.append || undefined,
      value: localized,
      group: unit.group
    });
  }

  const sectionMap = groupByToMap(result, v => (v.group));
  const resultSections: ResultSection[] = Array.from(sectionMap, (entry) => {
    return { label: entry[0], items: entry[1] }
  });

  return resultSections;
}

export const calcSpecific = (value: string, from: ConversionItem, to: ConversionItem, category: ConversionCategory): string | null => {

  let invalidInput = false;
  if (category.options?.categoryIsInputValid && !category.options.categoryIsInputValid(value)) {
    invalidInput = true;
  };

  let genericValue: string | undefined = "NaN";
  try {
    if (!invalidInput) {
      genericValue = from.convertToGeneric(value);
    }
  } catch (error) {
    console.error('Invalid input at convertToGeneric', error);
  }
  if (genericValue === undefined) return null;

  let convertedBig = new Big(0);
  let localized = 'NaN';

  // If input is valid
  if (!invalidInput) {
    try {

      if (to.options?.format === 'HEX') {
        // Check for formatting options
        localized = to.convertFromGeneric(genericValue).toUpperCase();

      } else {
        // Else, convert to number and format
        convertedBig = new Big(to.convertFromGeneric(genericValue));

        // Format string unless disabled
        localized = category.options?.skipStringFormatting ? (
          convertedBig.toString()
        ) : (
          convertedBig.toNumber().toLocaleString('de-DE', { maximumFractionDigits: 5, minimumFractionDigits: 0 })
        );
      }

      return localized;

    } catch (error) {
      console.error('Invalid input at convertFromGeneric', error);
    }
  }

  return null;
}