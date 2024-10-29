import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TreeStatusPage } from './tree-status.page';

describe('TreeStatusPage', () => {
  let component: TreeStatusPage;
  let fixture: ComponentFixture<TreeStatusPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeStatusPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TreeStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
