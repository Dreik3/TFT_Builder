export interface RankNode {
  name: string;
  description: compDescription;
  children?: RankNode[];
  imageSrc?: string;
  isSelected?: false,
  parentName?: string
}

// todo: think about separate logic for ranks (S, A ..), different fields are needed
export interface compDescription {
  name?: string,
  difficulty?: string,
  dependency?: string,
  requirements?: string,
  howToPlay?: string,
  itemHolder?: string,
  core?: string,
  augments?: string,
  counters?: string,
}
