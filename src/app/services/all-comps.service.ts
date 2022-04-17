import { Injectable } from '@angular/core';
import {Composition} from "../interfaces/composition-interface";

@Injectable({
  providedIn: 'root'
})
export class AllCompsService {
  allComps: Composition[] = [
    {
      name: 'Innovator',
      tier: 'S',
      bestItems: [
        {
          itemId: 'ie',
          amount: 2,
        },
        {
          itemId: 'lw',
          amount: 2,
        },
        {
          itemId: 'giant_slayer',
          amount: 2,
        },
        {
          itemId: 'morello',
          amount: 1
        },
        {
          itemId: 'spear',
          amount: 1
        }
        ],
      bestAugments: [
        'Innovator Heart',
        'Makeshift Armor 1', 'Makeshift Armor 2', 'Makeshift Armor 3',
        'Stand United 1', 'Stand United 2', 'Stand United 3',
        'Disintegrator I', 'Disintegrator II',
        'Meditation I', 'Meditation II', 'Meditation III',
        'Luden\'s Echo I', 'Luden\'s Echo II', 'Luden\'s Echo III'],
    },
  ];

  constructor() { }

}
