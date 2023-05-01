import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalCallService {
  url = `http://127.0.0.1:7700/v1/`
  constructor(private httpClient: HttpClient) { }

  async getData(skip:number,limit:number): Promise <any>{
    const apiUrl = this.url+`getDetails?skip=${skip}&limit=${limit}`
    try{
      // const respData = await this.httpClient.get<any>(`http://127.0.0.1:7700/v1/getDetails?skip=${skip}&limit=${limit}`).toPromise();
      const responsePromise = firstValueFrom(this.httpClient.get(apiUrl));
      const response = await responsePromise;
      return response;
    } catch (err) {
      console.error('While fethcing data error occured:', err);
      throw err;
    }   
  };

  // async insertData(data:any){
  //   try{
  //     const respData = await this.httpClient.post<any>('http://127.0.0.1:7700/v1/insertDetails',data);
  //     return respData
  //   } catch (err) {
  //     console.error('While saving data error occured:', err);
  //     throw err;
  //   }
  // }

  insertData(data:any){
    try{
      return this.httpClient.post<any>('http://127.0.0.1:7700/v1/insertDetails',data).subscribe((response) => {
        console.log("Response of save Data", response)
      })
    } catch (err) {
      console.error('While saving data error occured:', err);
      throw err;
    }
  }
}
