import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {LayoutComponent} from './modules/core/components/layout/layout.component';
import {NavbarComponent} from './modules/core/components/navbar/navbar.component';
import {SearchComponent} from './modules/search/components/search/search.component';
import {SearchModule} from './modules/search/search.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {FeaturedComponent} from './modules/search/components/featured/featured.component';
import {SpinnerComponent} from './modules/shared/components/spinner/spinner.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SearchModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      declarations: [
        AppComponent,
        LayoutComponent,
        NavbarComponent,
        SearchComponent,
        FeaturedComponent,
        SpinnerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
