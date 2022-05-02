import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.scss']
})
export class FilmInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
filmDetails:any=[];
  ngOnInit(): void {
    this.filmDetails = this.data;
  }

}
