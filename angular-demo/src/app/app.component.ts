import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Phần mềm kiểm tra file pdf';
  pdfSrc:any;
  
  uploadFile(event: any) {
    const file = event.target.files[0];
    const body = {title : 'angular Post request'};
    const header = {'Content' : 'Type' , 'applicason/json':'charset=utf-8'};
  
    console.log(event);
    let reader = new FileReader();
    reader.onloadend = (e: any) => {
       this.pdfSrc = e.target.result;
    };
    reader.readAsArrayBuffer(event.target.files[0]);
   
    reader.readAsDataURL(this.pdfSrc);
    reader.onload = ( ) =>{
      console.log(reader.result);
    }
    
  }
  public postJsonValue : any;
  private finaldata =[];
  private apiurl = "https://xacthuckyso.vn/api/checksignature";
  constructor (private httpClient: HttpClient){}
  
  getData(){
    return this.httpClient.post(this.apiurl,this.postJsonValue).
    subscribe((res)=>{
      if(res!=null){
        console.error('thong tin loi');
      }
      else{
        console.log('hop le');
      }
    }
     
    );
   
  }
  
  
}
