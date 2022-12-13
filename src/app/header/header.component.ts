
import {Component,OnInit,OnDestroy} from '@angular/core'
import { MatDialog }  from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter, Observable, of, Subject,takeUntil } from 'rxjs';
import {AddBookComponent} from '../add-book/add-book.component';
import { MembershipComponent } from '../membership/membership.component';
import { SampleServiceService } from '../sample-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  onDestroy$ = new Subject<boolean>()
  mail:any;
  name:any;
  firstName:any;
  lastName:any;
  title = 'Angular Search Using ng2-search-filter';

  searchText: any;
  // panelOpenState = false;

  loggedIn$: Observable<boolean> = of(false);
  bookData: any;

  constructor(private dialog: MatDialog,private router:Router, private service: SampleServiceService){}
  ngOnInit(): void {
     this.loggedIn$ = this.service.loggedIn$;
    
      this.mail=localStorage.getItem('email')
      this.name=this.mail?.split('.').join(' ').split('@',1).join('')
      this.firstName=((this.name?.split(' ',1))[0])[0]

      this.lastName=((this.name?.split(' ',2))[1])[0]
      


  }
  addBook(){
    const dialogRef = this.dialog.open(AddBookComponent, {
      height: "400px",
      width:"230px",
      
    });
    dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe()

  }


  addPerson(){
    const dialogRef = this.dialog.open(MembershipComponent, {
      height: "450px",
      width:"750px",
      
    });
    dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe()
  }


  onSearch(value:any){
    // console.log('-----',value);
    this.service.searchItem(value)
    
  }



  fav(){
    this.router.navigate(['fav-cmp/'])

  }
  genreFunc(){
    this.router.navigate(['genre-cmp/'])
  
  }
  booksFunc(){
    this.router.navigate(['dashboard/'])
    

}
// comicsBooks(){
//   this.service.getBook_card().pipe(takeUntil(this.onDestroy$))
//   // .pipe(filter((val:any)=>{return val.genre=='comics'}))
//   .subscribe((data)=>{
//     this.bookData=data
   
    

//   })
//}
  
  logOut(){
    
    
    
      localStorage.setItem('LoginSuccessful','false')
      this.service.setLoginStatus(false);

  

      this.router.navigate(['/login'])
      // window.location.reload()
   
        
     }
     ngOnDestroy(): void {
      this.onDestroy$.next(true)
      this.onDestroy$.complete()
  }
}


