interface Volume {
  value: number;
  unit: string;
}

export interface MashTemp {
  temp: {
    value: number;
    unit: string;
  };
  duration: number;
}

export interface Malt {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

export interface Hops {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  attribute: string;
}

export interface IBeer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: {
    mash_temp: MashTemp[];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
  };
  ingredients: {
    malt: Malt[];
    hops: Hops[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
}
