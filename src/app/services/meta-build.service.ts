import { Injectable } from '@angular/core';
import {RankNode} from "../interfaces/rank-tree-interface";

@Injectable({
  providedIn: 'root'
})
export class MetaBuildService {
  treeData: RankNode[] = [
    {
      name: 'S Tier: ',
      description: {name: 'Best TFT Comps – Highly Flexible or Very Strong.'},
      children: [
        {
          name: 'Socialite + Random',
          parentName: 'S Tier: ',
          description: {
            difficulty: 'High',
            dependency: 'Medium',
            requirements: '-',
            itemHolder: 'anyone',
            howToPlay: '&nbsp;&nbsp;Standard leveling' + '<br>' +
              '&nbsp;&nbsp;Put Carry on Socialite Hex' + '<br>' +
              '&nbsp;&nbsp;If Socialite on Front 2 rows: Akali, Tahm Kench, Galio (if AD), Kaisa (with GA),' + '<br>' +
              '&nbsp;&nbsp;If Socialite on Back 2 rows: Akali, Viktor, Kaisa, Galio',
            core: 'Galio, Sion, 3 Socialite',
            augments: 'Socialite/Colossus, Armor Plating is the best one, Exile pretty good too, others probably work too',
            counters: '-',
          },
          imageSrc: 'https://cdn-5fad0894c1ac1813b0e8209c.closte.com/wp-content/uploads/2021/12/socilaite-1124b.png.webp',

        },
        {
          name: 'Chemtech Urgot',
          description: {},
          imageSrc: 'https://cdn-5fad0894c1ac1813b0e8209c.closte.com/wp-content/uploads/2021/12/bruiser-chemtech-1124b-2048x1146.png.webp',
        },
      ],
    },
    {
      name: 'A Tier: ',
      description: {name: 'Solid TFT Team Comps. Weaker, less flexible, requires more luck than S-Tier.'},
      children: [
        { name: 'Snipers', description: {} },
        { name: 'Arcanists', description: {} },
        { name: 'Yone', description: {} },
      ],
    },
    {
      name: 'B Tier: ',
      description: {name:'Playable, but not Preferred. These comps could be strong if uncontested.'},
      children: [
        { name: 'Scrap', description: {} },
        { name: 'Syndicate', description: {} },
        { name: 'Protector Reroll', description: {} },
        { name: 'Tristana Reroll', description: {} },
        { name: 'Fiora', description: {} },
        { name: 'Innovator', description: {} },
        { name: 'Twitch Reroll', description: {} },
        { name: 'Heimerdinger', description: {} },
        { name: 'Mutant Malzahar', description: {} },
        { name: 'Samira', description: {} },
      ],
    },
    {
      name: 'C Tier: ',
      description: {name: 'These compositions are weak, but if they are given to you, you can play them.'},
      children: [
        { name: 'Trundle Reroll', description: {} },
        { name: 'Miss Fortune Reroll', description: {} },
        { name: 'Katarina Assassins', description: {} },
        { name: 'Warwick Reroll', description: {} },
        { name: 'Yordle Veigar', description: {} },
        { name: 'Gangplank Reroll', description: {} },
        { name: 'Lissandra Reroll', description: {} },
      ],
    },
  ];

  constructor() { }
}
