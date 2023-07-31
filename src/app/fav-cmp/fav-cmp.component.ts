import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, Subject, takeUntil } from 'rxjs';
import { ELEMENT_DATA } from '../model';
import { SampleServiceService } from '../sample-service.service';




@Component({
  selector: 'app-fav-cmp',
  templateUrl: './fav-cmp.component.html',
  styleUrls: ['./fav-cmp.component.css']
})
export class FavCmpComponent implements OnInit {
  displayedColumns = ['id','bookName','author','genre','star',];
  
  onDestroy$ =  new Subject<boolean>()

  dataSource:  Observable<ELEMENT_DATA[]>=of([{
    bookName: '',
    author: '',
    genre: '',
    id: '',
    fav: false
  }])
  constructor(private service:SampleServiceService){}
  

  ngOnInit():void{
   
   this.service.getELEMENT_DATA()
     this. dataSource=this.service.dataEvents$

    
    .pipe(map((value:any)=>{
      
      
     return (value.filter((data:any)=> data.fav))
    }))
    
   }

   favFunc(data:any){
    this.service.updateFav(data)
    .pipe(takeUntil(this.onDestroy$)).subscribe(()=>{
    window.location.reload()
    })
    
  }
  ngOnDestroy(): void {
    this.onDestroy$.next(true)
    this.onDestroy$.complete()
  }
      
}
   



