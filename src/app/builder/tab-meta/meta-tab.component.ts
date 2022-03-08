import { Component, OnInit } from '@angular/core';
import {RankNode} from "../../interfaces/rank-tree-interface";

@Component({
  selector: 'app-meta-tab',
  templateUrl: './meta-tab.component.html',
  styleUrls: ['./meta-tab.component.scss']
})
export class MetaTabComponent implements OnInit {
  selectedComp: RankNode;

  constructor() {
    // todo: move default node to service
    this.selectedComp = {
      name: 'default',
      description: {},
      imageSrc: 'https://www.riotgames.com/darkroom/1000/fab68f870f6da8998086165e608ea621:659056e32b0511d7f8525348809721ff/tft.jpg'
    };
  }

  ngOnInit(): void {
  }

  onSelectionChanged(node: RankNode): void {
    this.selectedComp = node;
    setTimeout(() => {
      const element = document.getElementById('newline');
      (element || {innerHTML: ''}).innerHTML = `How to Play: ${this.selectedComp.description.howToPlay ? '<br><span style="font-size: 0.8em; font-weight: lighter;">' + this.selectedComp.description.howToPlay + '</span>' : ''}`;
    })
  }
}
