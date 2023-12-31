import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ELEMENT_DATA, genre_data } from './model';



@Injectable({
  providedIn: 'root'
  
})
export class SampleServiceService {
  
data:ELEMENT_DATA[]=[]
  private loggedin: BehaviorSubject<boolean> = new BehaviorSubject(JSON.parse(localStorage.getItem('LoginSuccessful') ?? 'false'));
  loggedIn$ = this.loggedin.asObservable();
user  = new BehaviorSubject("username")
  fromService='This is free Service'
  private message = new BehaviorSubject<string>('default message')
  getMessage = this.message.asObservable();


  private dataSubject$:Subject<ELEMENT_DATA[]> = new Subject();
  dataEvents$=this.dataSubject$.asObservable();


  API_URL='http://localhost:3000/ELEMENT_DATA';
  login_url='https://reqres.in/api/login';
  genre_url='http://localhost:3000/genre_data';
  book_url='http://localhost:3000/books'

  constructor(private http:HttpClient) {}
  updateMessage(msg: string) {
    console.log('...msg...',msg);
    this.message.next(msg);
    
  }

  

  setLoginStatus(value: any) {
    // console.log('---local---', localStorage.getItem('LoginSuccessful'))
    this.loggedin.next(value);
  }
  
  getELEMENT_DATA(){
    this.http.get(this.API_URL)
    .subscribe((val:any)=> {
      this.dataSubject$.next(val);
      this.data=val;
    })
  }

  createELEMENT_DATA(data:any):Observable<any>{
    console.log('...data...',data);
    return this.http.post(this.API_URL,data)
    
  }
  deleteELEMENT_DATA(id:any): Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`)
  }
  editELEMENT_DATA(data:any): Observable<any>{
    return this.http.put(`${this.API_URL}/${data.id}`,data);
  }

  getDetails(id:any){
    return this.http.get(`${this.API_URL}/${id}`)
  }


  login(data:any):Observable<any>{
    return this.http.post(`${this.login_url}`,data)
  }


   getGenre_card():Observable<genre_data[]>{
    return this.http.get<genre_data[]>(this. genre_url)
    }
   
  updateFav(data:any){
      const newdata={
       ...data,
      fav:!data.fav
      }
    return this.http.put(`${this.API_URL}/${data.id}`,newdata)
       }
  searchItem(value:any){
    this.dataSubject$.next(this.data.filter((val:any) => val.bookName.toLowerCase().includes(value.toLowerCase())))
  }
  getBook_card(){
    return this.http.get(this. book_url)
    }
  
  
}



export class MyGuard implements CanActivate{
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let a=localStorage.getItem('LoginSuccessful') ?? ''
    return JSON.parse(a)
  }


  
  
  


}