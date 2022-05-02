import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoSwService } from 'src/app/services/demo-sw.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private service: DemoSwService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
    this.getFinalData();
    setTimeout(() => {
      this.getFixedData();
      this.counter=true;
    }, 2000);
  }

  links() {
    return this.http.get('https://swapi.dev/api/people');
  }

  dataArr: any = [];
  next: any;
  counter:boolean = false;
  getData() {
    this.links().subscribe((data: any) => {
      this.dataArr = data.results;
    })
  }

  url = 'https://swapi.dev/api/people';

  finalArrOfChars: any = [];
  getFinalData() {
    for (let i = 1; i < 5; i++) {
      this.http.get(`${this.url}/?page=${i}`).subscribe((data: any) => {
        this.finalArrOfChars.push(data.results);
      })
    }
  }


  newArr: any = [];
  getFixedData() {
    // console.log(this.finalArrOfChars);
    this.finalArrOfChars.forEach((element: any) => {
      for (let i = 0; i < element.length; i++) {
        // this.newArr = element[i];
        this.newArr.push(element[i]);
      }
    });
    console.log(this.newArr);
  }

  sendDataToMoreInfo(data: any) {
    console.log('data from home');
    // console.log(data);
    this.router.navigateByUrl('/more', { state: data });
    // this.service.showPeopleDetails(data);
  }

}
