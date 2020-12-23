
import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css'],
  
})
export class OrbitListComponent implements OnInit {
  
  @Input() satellites: Satellite[];
  constructor() {
   }

  ngOnInit() {
    //console.log(JSON.stringify(this.satellites))
  }
  sort(column: string): void {
      console.log("TESTING")
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
      //console.log(JSON.stringify(a))
      //console.log(JSON.stringify(b))
       if(a[column] < b[column]) {
          return -1;
       } else if (a [column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }

}
