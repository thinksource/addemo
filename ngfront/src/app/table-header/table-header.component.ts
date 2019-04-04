import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: '[app-table-header]',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  variableName = new Array<string>();
  constructor(dsService: DataServiceService) {
    dsService.getVariables().subscribe(res => {
      this.variableName = res.map(item => item.name);
    }
    );
   }

  ngOnInit() {
  }

}
