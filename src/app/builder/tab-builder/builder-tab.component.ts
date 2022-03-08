import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {Item} from "../../interfaces/items-interface";
import {Composition} from "../../interfaces/composition-interface";

@Component({
  selector: 'app-builder-tab',
  templateUrl: './builder-tab.component.html',
  styleUrls: ['./builder-tab.component.scss']
})
export class BuilderTabComponent implements OnInit {
  imageSrc = 'https://www.riotgames.com/darkroom/1000/fab68f870f6da8998086165e608ea621:659056e32b0511d7f8525348809721ff/tft.jpg';

  constructor(
    private itemsService: ItemsService,
  ) {}

  ngOnInit(): void {
  }

  baseItems: Item[] = this.itemsService.baseItems;
  combinedItems: Item[] = this.itemsService.combinedItems;
  selectedItems: Item[] = [];
  equippedItems: Item[] = [];
  possibleToCombineItems: Item[] = [];

  allMetaComps: Composition[] = [];
  suitedComps: Composition[] = [];


  addItem(item: any) {
    const selectedItemIndex = this.selectedItems.indexOf(item);
    if (selectedItemIndex === -1) {
      this.selectedItems.push(item);
    }
    item.selectedAmount += 1;
    this.calculatePossibleToCombineItems();
    this.refreshSuitedComps();
  }

  removeItemFromSelected(item: any) {
    if (item.selectedAmount === 1) {
      this.removeItemFromArrayByIndex(this.selectedItems, this.findItemIndexInArray(this.selectedItems, item))
    }
    item.selectedAmount -= 1;
    this.calculatePossibleToCombineItems();
  }

  calculatePossibleToCombineItems() {
    const newPossibleItems: Item[] = [];
    this.selectedItems
      .filter(item => this.isBaseItem(item))
      .forEach(item => newPossibleItems.push(...this.possibleCompletedItemsByPart(item)));
    this.possibleToCombineItems = [...new Set(newPossibleItems)];
  }

  possibleCompletedItemsByPart(item: Item): Item[] {
    return this.combinedItems
      .filter(combinedItem => combinedItem.parts?.includes(item.id))
      .filter(item => {
        if (item.parts[0] === item.parts[1]) {
          const baseItem = this.findBaseInSelected(item.parts[0]);
          return baseItem.selectedAmount > 1;
        } else {
          return item.parts.every(baseItemId => this.isBaseInSelected(baseItemId));
        }
      });
  }

  findBaseInSelected(itemId: string): Item {
    return this.selectedItems.find(selectedItem => selectedItem.id === itemId) as Item;
  }

  isBaseInSelected(itemId: string): boolean {
    return this.selectedItems.findIndex(selectedItem => selectedItem.id === itemId) > -1;
  }

  isBaseItem(item: Item): boolean {
    return this.baseItems.findIndex(baseItem => baseItem.id === item.id) > -1;
  }

  // todo: remove if not needed
  findBaseItemById(baseItemId: string): Item {
    return this.baseItems.find(item => item.id === baseItemId) as Item;
  }

  equipItemFromParts(item: Item): void {
    const neededBaseItemIds = item.parts;
    neededBaseItemIds.forEach(baseItemId => {
      this.removeItemFromSelected(this.selectedItems.find(item => item.id === baseItemId));
    })
    this.equipItem(item);
  }

  equipItemFromSelected(item: Item): void {
    this.removeItemFromSelected(item);
    this.equipItem(item);
  }

  equipItem(item: Item): void {
    if (!this.itemsArrayContainItem(this.equippedItems, item)) {
      this.equippedItems.push(item);
    }
    item.equippedAmount += 1;
  }

  moveBackToSelectedItems(item: Item): void {
    item.equippedAmount -= 1;
    if (item.equippedAmount === 0) {
      this.removeItemFromArrayByIndex(this.equippedItems, this.findItemIndexInArray(this.equippedItems, item))
    }
    this.addItem(item);
  }

  findItemIndexInArray(array: Item[], item: Item): number {
    return array.indexOf(item);
  }

  removeItemFromArrayByIndex(array: Item[], itemIndex: number): void {
    array.splice(itemIndex, 1);
  }

  itemsArrayContainItem(array: Item[], item: Item): boolean {
    return array.indexOf(item) > -1;
  }

  refreshSuitedComps(): any {
    this.suitedComps = [];
    const fullSelectedItems = this.selectedItems.filter(item => item.parts.length);
    // todo: we can't use all possible to combine items since they are built from the same parts
    const allUserItems = [...fullSelectedItems, ...this.equippedItems, ...this.possibleToCombineItems];
    this.suitedComps = this.calculateSuitedComps(allUserItems);
  }

  calculateSuitedComps(allUserItems: Item[]): Composition[] {
    return this.allMetaComps.filter(composition => {
      // todo: add logic
    })
  }

}
