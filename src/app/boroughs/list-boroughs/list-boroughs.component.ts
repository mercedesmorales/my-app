import { Component, OnInit } from '@angular/core';
import { BoroughService } from '../../service/borough/borough.service';

@Component({
  selector: 'app-list-boroughs',
  templateUrl: './list-boroughs.component.html',
  styleUrls: ['./list-boroughs.component.css']
})
export class ListBoroughsComponent implements OnInit {

  results: any;

  constructor(private boroughService: BoroughService) { }

  ngOnInit() {
	  this.boroughService.getBoroughs().subscribe(data => {
      this.results = data.get("results");
	  console.log(data);
	  });
  }

}
