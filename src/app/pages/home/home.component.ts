import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = '山东乐享信息技术有限公司官网';
  data$: Observable<number>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    /*    this.data$ = of(1, 2, 3, 4, 5).pipe(
          map(res => res * 2),
          filter(res => res > 7)
        );*/
    /*    this.data$ = Observable.create(observer => {
          observer.next(1);
          observer.next(2);
          observer.complete();
          observer.next(3);
          observer.error('我报错了');
        });*/
  }

  ngAfterViewInit() {
    /*    this.data$.subscribe(res => {
            console.log(res);
          },
          res => {
            console.error(res);
          },
          () => {
            console.log('我完成了');
          }
        );*/
  }

  toLogin() {
    this.router.navigate(['/login', 888], {queryParams: {name: '屎图图2号'}});
  }
}
