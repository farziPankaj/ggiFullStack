import { Component } from '@angular/core';
import { ExternalCallService } from '../service/gateway/external-call.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  length: number = 100;
  pageSize: number = 10;
  pageIndex: number = 0;
  dataSource = [];
  displayedColumns = ['serialNumber', 'name', 'batch', 'gender', 'mobileNumber', 'email', 'dateOfEnrollment', 'status'];

  constructor(private ex : ExternalCallService) {}

  async ngOnInit() {
    try {
      const apiData = await this.ex.getData(this.pageIndex,this.pageSize);
      console.log('API data:', apiData);
      console.log('Response data:', apiData.data.data);
      this.length = apiData.data.total,
      this.dataSource = apiData.data.data;
    } catch (error) {
      console.error('Error in ngOnInit:', error);
    }
  }

  async handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    const apiData = await this.ex.getData(this.pageIndex,this.pageSize);
    this.dataSource = apiData.data.data;
  }
  
}
