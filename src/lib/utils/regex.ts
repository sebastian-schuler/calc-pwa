export const isFloatRegex = (arg: string): boolean => {
  return /^[+-]?([0-9]*[.])?[0-9]+$/.test(arg);
}