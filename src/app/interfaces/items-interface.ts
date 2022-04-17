export interface Item {
  name: string,
  description: string,
  src: string,
  id: string,
  selectedAmount: number,
  equippedAmount: number,
  // parts: BaseItem[],
  parts: string[],
  wearers: string[],
}

// todo: rename file or move this interface
export interface Augment {
  name: string;
  effect: string;
  tier: number;
}
