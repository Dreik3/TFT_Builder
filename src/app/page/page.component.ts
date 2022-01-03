import { Component, OnInit } from '@angular/core';
import {RankNode} from "../interfaces/rank-tree-interface";

@Component({
  selector: 'main-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
  // todo: move default node to service
  selectedComp: RankNode = { name: 'default', description: {}, imageSrc: 'https://www.riotgames.com/darkroom/1000/fab68f870f6da8998086165e608ea621:659056e32b0511d7f8525348809721ff/tft.jpg' };
  constructor() {}

  ngOnInit(): void {
  }

  onSelectionChanged(node: RankNode): void {
    this.selectedComp = node;
    // @ts-ignore
    setTimeout(() => {
      const element = document.getElementById('newline');
      (element || {innerHTML: ''}).innerHTML = `How to Play: ${this.selectedComp.description.howToPlay ? '<br><span style="font-size: 0.8em; font-weight: lighter;">' + this.selectedComp.description.howToPlay + '</span>' : ''}`;
    })
  }

}
