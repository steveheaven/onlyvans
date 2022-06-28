export enum ParamVariant {
  AboveLimit = "AboveLimit",
  Deposit = "Deposit",
}

const getVariant = (variant: ParamVariant) => {
  // @TODO: not much evolvable here, but it's a start...redo this later
  return (aboveLimit: string | undefined, deposit: string | undefined) => {
    if (variant === ParamVariant.AboveLimit)
      return `Při překročení denního limitu: ${aboveLimit},-Kč/km`;
    if (variant === ParamVariant.Deposit) return `Kauce ${deposit},- Kč.`;
  };
};

const aboveLimit = getVariant(ParamVariant.AboveLimit);
const deposit = getVariant(ParamVariant.Deposit);

export const conditions = [
  "Částky jsou uvedeny bez DPH.",
  "Jsme plátci DPH.",
  "Platby pouze předem v hotovosti včetně kauce.",
  "Cena se počítá za každý započatý den.",
  "Denní limit: 200km",
  aboveLimit,
  deposit,
];
