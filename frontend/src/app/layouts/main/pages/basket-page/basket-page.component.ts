import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IBasket} from "../../../../shared/models/basket.model";
import {BasketService} from "../../../../shared/services/basket.service";
import {LoginService} from "../../../../shared/services/login.service";

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketPageComponent implements OnInit {
  basketProducts$: Observable<IBasket[]>;

  constructor(private basketService: BasketService,
              private loginService: LoginService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.basketProducts$ = this.basketService.getAllByUserId(this.loginService.getUserId())
  }

  changeCount(basketProduct: IBasket, increase: boolean) {
    if(increase) {
      ++basketProduct.amount
    } else if(!increase && basketProduct.amount > 1) {
      --basketProduct.amount
    }
  }

  getTotal(basketProduct: IBasket): number {
    return basketProduct.amount * +basketProduct.price
  }

  totalSum(basketProducts: IBasket[]): number {
    return basketProducts.reduce((acc, next) => {
      return acc + +next.price * next.amount
    }, 0)
  }

  checkout(): void {
    this.basketService.checkout(this.loginService.getUserId()).subscribe(() => {
      this.basketProducts$ = this.basketService.getAllByUserId(this.loginService.getUserId())
      this.cdr.detectChanges()
      // this._snackbar
    })
  }

  removeBasketProduct({userId, _id}: IBasket) {
    this.basketService.removeById(userId, _id).subscribe(() => {
      this.basketProducts$ = this.basketService.getAllByUserId(this.loginService.getUserId())
      this.cdr.detectChanges()
    })
  }
}
