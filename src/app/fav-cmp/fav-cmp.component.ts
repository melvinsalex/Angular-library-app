import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';




@Component({
  selector: 'app-fav-cmp',
  templateUrl: './fav-cmp.component.html',
  styleUrls: ['./fav-cmp.component.css']
})
export class FavCmpComponent implements OnInit {
  displayedColumns = ['id','bookName','author','genre','star',];
  

  dataSource:  Observable<any>=of([{}])
  constructor(private service:SampleServiceService){}
  

  ngOnInit():void{
   
   this.service.getELEMENT_DATA()
     this. dataSource=this.service.dataEvents$

    
    .pipe(map((value:any)=>{
      
      
     return (value.filter((data:any)=> data.fav))
    }))
    
   }

    
      
}
   



