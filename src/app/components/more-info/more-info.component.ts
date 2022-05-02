import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoSwService } from 'src/app/services/demo-sw.service';
import { FilmInfoComponent } from '../film-info/film-info.component';
import { StarshipsInfoComponent } from '../starships-info/starships-info.component';
import { VehicleInfoComponent } from '../vehicle-info/vehicle-info.component';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {

  // charId: any;
  charArr: any = [];
  filmArr: any = [];
  vehicleArr: any = [];
  starShipArr: any = [];
  // containsFilmName: any = [];

  constructor(private service: DemoSwService, private route: ActivatedRoute, private router: Router, private http: HttpClient, private dialog: MatDialog) {
    this.charArr = this.router.getCurrentNavigation()?.extras.state;
    // console.log(this.charArr);
  }

  ngOnInit(): void {
    // this.getRequiredChar();
    this.getFilmData();
    this.getVehicleData();
    this.getStarshipData();
  }

  getRequiredChar() {

  }

  // getRequiredChar() {
  //   this.charId = this.route.snapshot.params['id'];
  //   this.service.getChars().subscribe((data: any) => {
  //     console.log(data.results[this.charId]);
  //     this.charArr = data.results[this.charId];
  //   });
  // }

  singleFilmData: any;
  getFilmData() {
    this.filmArr = this.charArr.films;
    for (let i = 0; i < this.filmArr.length; i++) {
      this.singleFilmData = this.filmArr[i];
      this.singleFilmInfo();
    }
  }

  finalFilmData: any = [];
  singleFilmInfo() {
    return this.http.get(this.singleFilmData)
      .subscribe((data: any) => {
        this.finalFilmData.push(data);
      })
  }

  singleVehicleData: any;
  getVehicleData() {
    this.vehicleArr = this.charArr.vehicles;
    for (let i = 0; i < this.vehicleArr.length; i++) {
      this.singleVehicleData = this.vehicleArr[i];
      this.singleVehicleInfo();
    }
  }

  finalVehicleArr: any = [];
  singleVehicleInfo() {
    return this.http.get(this.singleVehicleData)
      .subscribe((data: any) => {
        this.finalVehicleArr.push(data);
        // console.log(this.finalVehicleArr);
      })
  }

  singleStarshipData: any;
  getStarshipData() {
    this.starShipArr = this.charArr.starships;
    for (let i = 0; i < this.starShipArr.length; i++) {
      this.singleStarshipData = this.starShipArr[i];
      this.singleStarshipInfo();
    }
  }

  finalStarshipArr: any = [];
  singleStarshipInfo() {
    return this.http.get(this.singleStarshipData).subscribe((data) => {
      this.finalStarshipArr.push(data);
      console.log(this.finalStarshipArr);
    })
  }

  openFilmsDialog(resp: any) {
    this.dialog.open(FilmInfoComponent, {
      data: resp
    });
  }

  openStarshipsDialog(resp: any) {
    this.dialog.open(StarshipsInfoComponent, {
      data: resp
    });
  }

  openVehiclesDialog(resp:any){
    this.dialog.open(VehicleInfoComponent,{
      data:resp
    })
  }



}
