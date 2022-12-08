import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-genre-cmp',
  templateUrl: './genre-cmp.component.html',
  styleUrls: ['./genre-cmp.component.css']
})
export class GenreCmpComponent implements OnInit {

   genreData:any
  
  
  constructor( private service:SampleServiceService){}

  ngOnInit():void{
    this.service.getGenre_card().subscribe((data)=>{
      this.genreData=data
      
      
    })
    
  

  
  }

 }
