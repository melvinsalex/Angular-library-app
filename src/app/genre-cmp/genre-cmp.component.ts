import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subject, filter, map, takeUntil, Observable, of } from 'rxjs';
import { genre_data } from '../model';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-genre-cmp',
  templateUrl: './genre-cmp.component.html',
  styleUrls: ['./genre-cmp.component.css']
})
export class GenreCmpComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<boolean>()
  cardsData: Observable<genre_data[]> = of([

  ])



  constructor(private service: SampleServiceService, private router: Router) { }

  ngOnInit(): void {
    // this.service.getGenre_card().pipe(takeUntil(this.onDestroy$)).subscribe((data)=>{
    //   this.genreData=data

    //   })
    this.router.events.pipe(takeUntil(this.onDestroy$), filter(event => event instanceof NavigationStart)).subscribe((route: any) => {
      if (!route.url.includes('comics') && !route.url.includes('sci-fi') && !route.url.includes('drama')) {
        this.cardsData = this.service.getGenre_card()
      } else {
        this.cardsData = this.service.getBook_card().pipe(takeUntil(this.onDestroy$), map((v: any) => {
          if (route.url.includes('comics')) {
            return v.filter((val: any) => val.genre == 'comics')
          }
          else if (route.url.includes('sci-fi')) {
            return v.filter((val: any) => val.genre == 'Sci-fi')


          }
          else if (route.url.includes('drama')) {
            return v.filter((val: any) => val.genre == 'drama')


          }


        }))
      }




    })

  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true)
    this.onDestroy$.complete()
  }


}
