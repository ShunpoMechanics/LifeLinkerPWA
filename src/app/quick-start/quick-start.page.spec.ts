import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuickStartPage } from './quick-start.page';

describe('QuickStartPage', () => {
  let component: QuickStartPage;
  let fixture: ComponentFixture<QuickStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickStartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuickStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
