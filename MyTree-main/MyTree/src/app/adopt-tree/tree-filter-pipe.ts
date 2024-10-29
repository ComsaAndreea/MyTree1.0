import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'treeFilter',
  pure: false
})
export class TreeFilterPipe  implements PipeTransform {
  transform(trees: any[]) {
    if(trees)
      return trees.filter(tree => tree.Adopted === 0);
  }
}
