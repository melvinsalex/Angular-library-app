import { Component,OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, takeWhile } from 'rxjs';
import { AddBookComponent } from '../add-book/add-book.component';
import { SampleServiceService } from '../sample-service.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  idDetails:any

  onDestroy$= new Subject<boolean>()


constructor(private route:ActivatedRoute,private service:SampleServiceService, private dialog:MatDialog ,private router:Router){}

ngOnInit(){
  
  this.service.getDetails(this.route.snapshot.params['id']).pipe(takeUntil(this.onDestroy$)).subscribe(data => {
    this.idDetails=data
    
  });

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
  this.service.deleteELEMENT_DATA(id).pipe(takeUntil(this.onDestroy$)).subscribe(data=>
    {this.router.navigate(["dashboard"])});
}

ngOnDestroy(): void {
    this.onDestroy$.next(true)
    this.onDestroy$.complete()
}
}
