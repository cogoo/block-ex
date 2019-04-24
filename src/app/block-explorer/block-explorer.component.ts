import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IBlock } from '../shared/models/block.model';
import anime from 'animejs/lib/anime.es';
import * as uuidv4 from 'uuid/v4';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-block-explorer',
  templateUrl: './block-explorer.component.html',
  styleUrls: ['./block-explorer.component.scss'],
  // encapsulation: ViewEncapsulation.Native,
})
export class BlockExplorerComponent implements OnInit {
  private data = {
    blocks: [] as IBlock[],
  };
  tempData$ = new BehaviorSubject({
    index: uuidv4(),
    timestamp: new Date(),
    message: 'This is the genesis block',
    hash: 'ert34t34tgefgs',
    link: '6e56e5rygsddhftd',
    complexity: 0,
  });

  constructor() {}

  ngOnInit() {
    this.tempData$.subscribe((data: IBlock) => {
      this.data.blocks.unshift(data);
      this.animateBlock();
    });

    setInterval(() => {
      this.tempData$.next({
        index: uuidv4(),
        timestamp: new Date(),
        message: 'This is the genesis block',
        hash: 'ert34t34tgefgs',
        link: '6e56e5rygsddhftd',
        complexity: 0,
      });
    }, 10000);
  }

  private animateBlock() {
    window.requestAnimationFrame(() => {
      anime({
        targets: 'div.animate',
        translateX: '300px',
        scale: '1.02',
        rotateY: '-180deg',
        translateZ: '-100px',
        duration: 3000,
        direction: 'alternate',
      });
    });
  }

  get blocks() {
    return this.data.blocks;
  }
}
