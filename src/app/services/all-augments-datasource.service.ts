import { Injectable } from '@angular/core';
import { Augment } from "../interfaces/items-interface";

@Injectable({
  providedIn: 'root'
})
export class AllAugmentsDatasourceService {
  allAugments: Augment[] = [
    {
      name: 'Arcanist Heart',
      effect: 'Gain a Swain and your team counts as having 1 additional Arcanist.',
      tier: 1,
    },
    {
      name: 'Assassin Heart',
      effect: 'Gain a Talon and your team counts as having 1 additional Assassin.',
      tier: 1,
    },
    {
      name: 'Bodyguard Heart',
      effect: 'Gain a Blitzcrank and your team counts as having 1 additional Bodyguard.',
      tier: 1,
    },
    {
      name: 'Bruiser Heart',
      effect: 'Gain a Sejuani and your team counts as having 1 additiona Bruiser.',
      tier: 1,
    },
    {
      name: 'Challenger Heart',
      effect: 'Gain a Quinn Quinn and your team counts as having 1 additional Challenger.',
      tier: 1,
    },
    {
      name: 'Chemtech Heart',
      effect: 'Your team counts as having 1 additional Chemtech.',
      tier: 1,
    },
    {
      name: 'Debonair Heart',
      effect: 'Gain a Talon and your team counts as having 1 additional Debonair.',
      tier: 1,
    },
    {
      name: 'Enchanter Heart',
      effect: 'Gain a Lulu Lulu and your team counts as having 1 additional Enchanter Enchanter.',
      tier: 1,
    },
    {
      name: 'Enforcer Heart',
      effect: 'Gain a Swain and your team counts as having 1 additional Arcanist Arcanist.',
      tier: 1,
    },
    {
      name: 'Mercenary Heart',
      effect: '',
      tier: 1,
    },
    {
      name: 'Mutant Heart',
      effect: '',
      tier: 1,
    },
    {
      name: 'Scholar Heart',
      effect: '',
      tier: 1,
    },
    {
      name: 'Scrap Heart',
      effect: '',
      tier: 1,
    },
    {
      name: 'Sniper Heart',
      effect: '',
      tier: 1,
    },
    {
      name: 'Socialite Heart',
      effect: '',
      tier: 1,
    },
    {
      name: 'Striker Heart',
      effect: '',
      tier: 1,
    },
    {
      name: 'Syndicate Heart',
      effect: '',
      tier: 1,
    },
    {
      name: 'Twinshot Heart',
      effect: '',
      tier: 1,
    },
    {
      name: 'Ancient Archives',
      effect: '',
      tier: 1,
    },
    {
      name: 'Arcane Nullifier I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Ardent Censer',
      effect: '',
      tier: 1,
    },
    {
      name: 'Ascension',
      effect: '',
      tier: 1,
    },
    {
      name: 'Backfoot I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Battlemage I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Blue Battery I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Built Different 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Calculated Loss',
      effect: '',
      tier: 1,
    },
    {
      name: 'Celestial Blessing 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Challenger Unity',
      effect: '',
      tier: 1,
    },
    {
      name: 'Chemical Overload 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Cutthroat',
      effect: '',
      tier: 1,
    },
    {
      name: 'Cybernetic Implants 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Cybernetic Shell I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Cybernetic Uplink I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Disintegrator I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Dominance',
      effect: '',
      tier: 1,
    },
    {
      name: 'Double Trouble I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Duet',
      effect: '',
      tier: 1,
    },
    {
      name: 'Electrocharge I',
      effect: '',
      tier: 1,
    },
    {
      name: 'En Garde',
      effect: '',
      tier: 1,
    },
    {
      name: 'Exiles 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Featherweights 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'First Aid Kit',
      effect: '',
      tier: 1,
    },
    {
      name: 'Four Score',
      effect: '',
      tier: 1,
    },
    {
      name: 'Hexnova',
      effect: '',
      tier: 1,
    },
    {
      name: 'Hyper Roll',
      effect: '',
      tier: 1,
    },
    {
      name: 'Item Grab Bag 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Keepers I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Knife\'s Edge 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Lifelong Learning',
      effect: '',
      tier: 1,
    },
    {
      name: 'Luden\'s Echo I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Makeshift Armor 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Meditation I',
      effect: '',
      tier: 1,
    },
    {
      name: 'One For All',
      effect: '',
      tier: 1,
    },
    {
      name: 'Overpower',
      effect: '',
      tier: 1,
    },
    {
      name: 'Pandora\'s Items',
      effect: '',
      tier: 1,
    },
    {
      name: 'Payday',
      effect: '',
      tier: 1,
    },
    {
      name: 'Phalanx I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Phony Frontline',
      effect: '',
      tier: 1,
    },
    {
      name: 'Pirates',
      effect: '',
      tier: 1,
    },
    {
      name: 'Recombobulator',
      effect: '',
      tier: 1,
    },
    {
      name: 'Runic Shield 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Second Wind I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Scoped Weapons',
      effect: '',
      tier: 1,
    },
    {
      name: 'Self-Repair',
      effect: '',
      tier: 1,
    },
    {
      name: 'Shrug It Off',
      effect: '',
      tier: 1,
    },
    {
      name: 'Stand Behind Me',
      effect: '',
      tier: 1,
    },
    {
      name: 'Stand United 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Stored Power',
      effect: '',
      tier: 1,
    },
    {
      name: 'Tiny Titans',
      effect: '',
      tier: 1,
    },
    {
      name: 'Thrill of the Hunt 1',
      effect: '',
      tier: 1,
    },
    {
      name: 'Tinker',
      effect: '',
      tier: 1,
    },
    {
      name: 'Treasure Trove I',
      effect: '',
      tier: 1,
    },
    {
      name: 'Tri Force I',
      effect: '',
      tier: 1,
    },
    {
      name: 'True Justice',
      effect: '',
      tier: 1,
    },
    {
      name: 'Underdogs',
      effect: '',
      tier: 1,
    },
    {
      name: 'Unstable Evolution',
      effect: '',
      tier: 1,
    },
    {
      name: 'Weakspot I',
      effect: '',
      tier: 1,
    },
    {
      name: 'The Golden Egg',
      effect: '',
      tier: 3,
    },
    {
      name: 'Arcanist Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Assassin Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Bodyguard Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Bruiser Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Challenger Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Chemtech Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Clockwork Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Debonair Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Innovator Heart',
      effect: '',
      tier: 2,
    },
    {
      name: 'Mercenary Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Mutant Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Scrap Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Sniper Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Striker Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Syndicate Crest',
      effect: '',
      tier: 2,
    },
    {
      name: 'Arcane Nullifier II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Archangel\'s Embrace',
      effect: '',
      tier: 2,
    },
    {
      name: 'Armor Plating',
      effect: '',
      tier: 2,
    },
    {
      name: 'Backfoot II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Battlemage II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Binary Airdrop',
      effect: '',
      tier: 2,
    },
    {
      name: 'Broken Stopwatch',
      effect: '',
      tier: 2,
    },
    {
      name: 'Built Different 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Celestial Blessing 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Chemical Overload 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Chemtech Unity',
      effect: '',
      tier: 2,
    },
    {
      name: 'Clear Mind',
      effect: '',
      tier: 2,
    },
    {
      name: 'Component Grab Bag',
      effect: '',
      tier: 2,
    },
    {
      name: 'Concussive Blows',
      effect: '',
      tier: 2,
    },
    {
      name: 'Cybernetic Implants 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Cybernetic Shell II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Cybernetic Uplink II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Disintegrator II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Double Trouble II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Electrocharge II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Exiles 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Featherweights 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Future Sight I',
      effect: '',
      tier: 2,
    },
    {
      name: 'Gold Reserves',
      effect: '',
      tier: 2,
    },
    {
      name: 'Golden Gifts I',
      effect: '',
      tier: 2,
    },
    {
      name: 'Hextech Heart',
      effect: '',
      tier: 2,
    },
    {
      name: 'High Five',
      effect: '',
      tier: 2,
    },
    {
      name: 'Instant Injection',
      effect: '',
      tier: 2,
    },
    {
      name: 'Irresistible Charm',
      effect: '',
      tier: 2,
    },
    {
      name: 'Jeweled Lotus',
      effect: '',
      tier: 2,
    },
    {
      name: 'Junkyard',
      effect: '',
      tier: 2,
    },
    {
      name: 'Keepers II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Knife\'s Edge 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Luden\'s Echo II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Makeshift Armor 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Meditation II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Metabolic Accelerator',
      effect: '',
      tier: 2,
    },
    {
      name: 'Phalanx II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Portable Forge',
      effect: '',
      tier: 2,
    },
    {
      name: 'Rich Get Richer',
      effect: '',
      tier: 2,
    },
    {
      name: 'Runic Shield 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Salvage Bin',
      effect: '',
      tier: 2,
    },
    {
      name: 'Second Wind II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Smoke Bomb',
      effect: '',
      tier: 2,
    },
    {
      name: 'Sniper\'s Nest',
      effect: '',
      tier: 2,
    },
    {
      name: 'So Small',
      effect: '',
      tier: 2,
    },
    {
      name: 'Spell Blade',
      effect: '',
      tier: 2,
    },
    {
      name: 'Stand United 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Sunfire Board',
      effect: '',
      tier: 2,
    },
    {
      name: 'Thieving Rascals',
      effect: '',
      tier: 2,
    },
    {
      name: 'Three\'s Company',
      effect: '',
      tier: 2,
    },
    {
      name: 'Thrill of the Hunt 2',
      effect: '',
      tier: 2,
    },
    {
      name: 'Titanic Force',
      effect: '',
      tier: 2,
    },
    {
      name: 'Trade Sector',
      effect: '',
      tier: 2,
    },
    {
      name: 'Treasure Trove II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Tri Force II',
      effect: '',
      tier: 2,
    },
    {
      name: 'True Twos',
      effect: '',
      tier: 2,
    },
    {
      name: 'Very VIP',
      effect: '',
      tier: 2,
    },
    {
      name: 'Weakspot II',
      effect: '',
      tier: 2,
    },
    {
      name: 'Arcanist Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Assassin Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Bodyguard Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Bruiser Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Challenger Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Chemtech Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Clockwork Soul',
      effect: '',
      tier: 3,
    },
    {
      name: 'Debonair Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Enchanter Soul',
      effect: '',
      tier: 3,
    },
    {
      name: 'Hextech Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Mercenary Soul',
      effect: '',
      tier: 3,
    },
    {
      name: 'Mutant Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Scholar Soul',
      effect: '',
      tier: 3,
    },
    {
      name: 'Scrap Soul',
      effect: '',
      tier: 3,
    },
    {
      name: 'Scrap Soul',
      effect: '',
      tier: 3,
    },
    {
      name: 'Socialite Soul',
      effect: '',
      tier: 3,
    },
    {
      name: 'Striker Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Syndicate Crown',
      effect: '',
      tier: 3,
    },
    {
      name: 'Twinshot Soul',
      effect: '',
      tier: 3,
    },
    {
      name: 'Arcane Nullifier III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Backfoot III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Band of Thieves',
      effect: '',
      tier: 3,
    },
    {
      name: 'Battlemage III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Blue Battery II',
      effect: '',
      tier: 3,
    },
    {
      name: 'Built Different 3',
      effect: '',
      tier: 3,
    },
    {
      name: 'Celestial Blessing 3',
      effect: '',
      tier: 3,
    },
    {
      name: 'Cybernetic Implants 3',
      effect: '',
      tier: 3,
    },
    {
      name: 'Cybernetic Shell III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Cybernetic Uplink III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Cybernetic Uplink III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Double Trouble III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Electrocharge III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Exiles 3',
      effect: '',
      tier: 3,
    },
    {
      name: 'Featherweights 3',
      effect: '',
      tier: 3,
    },
    {
      name: 'Future Sight II',
      effect: '',
      tier: 3,
    },
    {
      name: 'Golden Gifts II',
      effect: '',
      tier: 3,
    },
    {
      name: 'Golden Ticket',
      effect: '',
      tier: 3,
    },
    {
      name: 'High End Shopping',
      effect: '',
      tier: 3,
    },
    {
      name: 'High Roller',
      effect: '',
      tier: 3,
    },
    {
      name: 'Item Grab Bag 2',
      effect: '',
      tier: 3,
    },
    {
      name: 'Knife\'s Edge 3',
      effect: '',
      tier: 3,
    },
    {
      name: 'Level Up!',
      effect: '',
      tier: 3,
    },
    {
      name: 'Luden\'s Echo III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Makeshift Armor 3',
      effect: '',
      tier: 3,
    },
    {
      name: 'March of Progress',
      effect: '',
      tier: 3,
    },
    {
      name: 'Meditation III',
      effect: '',
      tier: 3,
    },
    {
      name: 'New Recruit',
      effect: '',
      tier: 3,
    },
    {
      name: 'Phalanx III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Radiant Relics',
      effect: '',
      tier: 3,
    },
    {
      name: 'Share the Spotlight',
      effect: '',
      tier: 3,
    },
    {
      name: 'Sharpshooter',
      effect: '',
      tier: 3,
    },
    {
      name: 'Stand United 3',
      effect: '',
      tier: 3,
    },
    {
      name: 'The Golden Egg',
      effect: '',
      tier: 3,
    },
    {
      name: 'Treasure Trove III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Tri Force III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Verdant Veil',
      effect: '',
      tier: 3,
    },
    {
      name: 'Weakspot III',
      effect: '',
      tier: 3,
    },
    {
      name: 'Windfall',
      effect: '',
      tier: 3,
    },
    {
      name: 'Wise Spending',
      effect: '',
      tier: 3,
    },
    {
      name: 'Woodland Charm',
      effect: '',
      tier: 3,
    },
  ];

  constructor() { }

}
