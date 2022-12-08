import { Component,OnInit, ViewChild, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddBookComponent } from '../add-book/add-book.component';
import { SampleServiceService } from '../sample-service.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['id','bookName','author','genre','star','dots'];


 

  
  constructor(private service:SampleServiceService,private route:ActivatedRoute,private router:Router,private dialog:MatDialog){}

  
  dataSource : Observable<any>=of([{}])
  
 
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


    
    dialogRef.afterClosed().subscribe()

  }
  
  deleteRow(id:any){
    this.service.deleteELEMENT_DATA(id).subscribe();
  }
  
card(id:any){
this.router.navigate(['description/',id])
}
favFunc(data:any){
  this.service.updateFav(data)
  .subscribe(d=>{
  window.location.reload()
  })
}
}