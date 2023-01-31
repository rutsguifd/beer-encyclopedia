import { IBeer } from "./modules/IBeer";

export type CardItemBeer = Pick<IBeer, "id" | "name" | "tagline" | "image_url">;

export type MainInfoProps = Pick<
  IBeer,
  | "image_url"
  | "name"
  | "tagline"
  | "first_brewed"
  | "attenuation_level"
  | "target_og"
  | "target_fg"
>;

export type DescriptionProps = Pick<IBeer, "description">;

export type AdditionalInfoProps = Pick<
  IBeer,
  "volume" | "boil_volume" | "abv" | "ebc" | "ibu" | "ph" | "srm"
>;

export type BrewingProcessProps = Pick<IBeer, "method" | "ingredients">;

export type BrewingTipsProps = Pick<IBeer, "brewers_tips">;

export type PairingFoodProps = Pick<IBeer, "food_pairing">;
