import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, EventEmitter, Output} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {RankNode} from "../../../../interfaces/rank-tree-interface";
import {MetaBuildService} from "../../../../services/meta-build.service";

@Component({
  selector: 'meta-builds-by-rank-tree',
  templateUrl: './meta-builds-by-rank-tree.component.html',
  styleUrls: ['./meta-builds-by-rank-tree.component.scss']
})
export class MetaBuildsByRankTreeComponent {
  @Output() selectedCompChanged = new EventEmitter<RankNode>();
  selectedComp: RankNode = { name: '', description: {}, imageSrc: 'https://www.riotgames.com/darkroom/1000/fab68f870f6da8998086165e608ea621:659056e32b0511d7f8525348809721ff/tft.jpg' };


  treeControl = new NestedTreeControl<RankNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<RankNode>();

  constructor(metaBuildService: MetaBuildService) {
    this.dataSource.data = metaBuildService.treeData;
  }
  hasChild = (_: number, node: RankNode) => !!node.children && node.children.length > 0;

  setSelectedComp(selectedComp: RankNode): void {
    if (selectedComp.children) { return; }
    this.selectedComp = selectedComp;
    this.selectedCompChanged.next(selectedComp);
  }

  thisCompSelected(node: RankNode): boolean {
    return this.selectedComp.name === node.name;
  }
}
