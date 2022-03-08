import {Item} from "./items-interface";

export interface Composition {
  name: string;
  mainCarry: CarryChampion;
  tank: CarryChampion;
  secondCarry?: CarryChampion;
}

export interface CarryChampion {
  itemHolder: string | Champion;
  bestItems: Item[];
  position: Position;
}

export interface Champion {
// todo: probably don't needed
}

export interface Position {
  row: number[];
  corner?: boolean;
}
