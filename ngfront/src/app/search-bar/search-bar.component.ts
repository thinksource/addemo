import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from '../data-service.service';
import { Pair } from '../dataObject';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() stationSelected: number;
  @Input() selectDate: NgbDate;
  @Output() dateClick = new EventEmitter<NgbDate>();
  @Output() stationClick = new EventEmitter<number>();
  stations = new Array<Pair>();
  constructor(dsService: DataServiceService) {
    dsService.getStations().subscribe(res =>
      this.stations = res.map(item => {
        return new Pair(item.id, item.name);
      })
    );
  }
  changeStation(val: number) {
    this.stationClick.emit(val);
  }

  dSelect(e: NgbDate) {
    console.log(`searchbar${e}`);
    this.dateClick.emit(e);
  }
  changeDate(dateStr: string) {
    const ds = dateStr.split('-');
    this.dateClick.emit(new NgbDate(Number(ds[0]), Number(ds[1]), Number(ds[2])));
  }
  ngOnInit() {
  }

}
