
// NAV UI

export type GlobalNavCategory = {
  id: string;
  label: string;
  children: GlobalNavItem[];
}

export type GlobalNavItem = {
  slug: string;
  label: string;
  icon: React.ReactNode;
  getData: () => ConversionCategory;
}

// DATA 

// Options for conversion category
export type ConversionCategoryOptions = {
  skipStringFormatting?: boolean
  shouldClearInputOnUnitChange?: boolean
  categoryIsInputValid?: (arg: string) => boolean
}

// Options for conversion item
export type ConversionItemOptions = {
  format?: 'HEX'
}

export type ConversionCategory = {
  initialUnit: string
  sections: ConversionSection[]
  options?: ConversionCategoryOptions
}

export type ConversionSection = {
  id: string
  label?: string | null
  items: ConversionItem[]
}

export type ConversionItem = {
  id: string
  label: string
  description?: string | null
  short?: string | null
  append?: string | null
  convertToGeneric: (arg: string) => string
  convertFromGeneric: (arg: string) => string
  isInputValid?: (arg: string) => boolean
  options?: ConversionItemOptions
}

// RESULT FOR UI

export type ConversionResult = {
  unitLabel: string
  unitShort?: string
  unitAppend?: string
  value: string
  unitId: string
  group?: string | null
}

export type ResultSection = {
  label: string | undefined | null
  items: ConversionResult[]
}