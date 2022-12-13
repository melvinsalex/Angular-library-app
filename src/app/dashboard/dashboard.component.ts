import { Component,OnInit, ViewChild,OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { AddBookComponent } from '../add-book/add-book.component';
import { ELEMENT_DATA } from '../model';
import { SampleServiceService } from '../sample-service.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  displayedColumns = ['id','bookName','author','genre','star','dots'];


 onDestroy$ =  new Subject<boolean>()

  
  constructor(private service:SampleServiceService,private route:ActivatedRoute,private router:Router,private dialog:MatDialog){}
  
  
  dataSource : Observable<ELEMENT_DATA[]>=of([{
    bookName: '',
    author: '',
    genre: '',
    id: '',
    fav: false

  }])
  

  
 
  ngOnInit():void{
    
    this.service.getELEMENT_DATA()
    this.dataSource=this.service.dataEvents$

    

    
  }
 
  editRow(yourData:any){
    
    
    const dialogRef = this.dialog.open(AddBookComponent, {
      height: "300px",
      width:"300px",
      data:{...yourData,showUpdateButton:true}

      

      
    });


    
   dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe()

  }
  
  deleteRow(id:any){
    this.service.deleteELEMENT_DATA(id).pipe(takeUntil(this.onDestroy$)).subscribe();
  }
  
card(id:any){
this.router.navigate(['description/',id])
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