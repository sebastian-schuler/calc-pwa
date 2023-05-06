export type FavouriteType = "shortcut" | "converter";

export type Favourite = {
  type: "shortcut";
  category: string;
  fromUnit: string | null;
} | {
  type: "converter";
  category: string;
  fromUnit: string;
  toUnit: string;
}