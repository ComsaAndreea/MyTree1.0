import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'adoptedFilter',
  pure: false
})
export class TreeAdoptedFilterPipe  implements PipeTransform {
  transform(trees: any[]) {
    if(trees)
      return trees.filter(tree => tree.Adopted === 1);
  }
}
