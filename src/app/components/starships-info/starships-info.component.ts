import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-starships-info',
  templateUrl: './starships-info.component.html',
  styleUrls: ['./starships-info.component.scss']
})
export class StarshipsInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  StarshipInfo:any=[]
  ngOnInit(): void {
    this.StarshipInfo = this.data;
    console.log(this.data);
  }

}
