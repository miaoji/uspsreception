import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersendComponent } from './ordersend.component';

describe('OrdersendComponent', () => {
  let component: OrdersendComponent;
  let fixture: ComponentFixture<OrdersendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
