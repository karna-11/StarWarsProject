import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data:any) { }

  vehicleInfo:any=[];
  ngOnInit(): void {
    this.vehicleInfo = this.data;
  }

}
