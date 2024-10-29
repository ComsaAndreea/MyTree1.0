import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'treeStatus',
  pure: false
})
export class TreeStatusPipe  implements PipeTransform {
  transform(data: any[]) {
    if(data)
      {return data.filter(TreeData => TreeData.Air_Humidity <= 60 && TreeData.Air_Humidity >=40
        && TreeData.SoilMoisture <= 1100 && TreeData.SoilMoisture >= 1000);}
    else
    {return 0;}
  }
}
