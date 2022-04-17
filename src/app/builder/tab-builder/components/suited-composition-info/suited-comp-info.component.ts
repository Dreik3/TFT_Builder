import {Component, Input} from '@angular/core';
import {Composition} from "../../../../interfaces/composition-interface";
import {Augment, Item} from "../../../../interfaces/items-interface";

@Component({
  selector: 'suited-compositions',
  templateUrl: './suited-comp-info.component.html',
  styleUrls: ['./suited-comp-info.component.scss']
})
export class SuitedCompInfoComponent {
  @Input() compositions: Composition[] = [];
  @Input() selectedItems: Item[] = [];
  @Input() selectedAugments: Augment[] = [];

  constructor() {

  }
}
