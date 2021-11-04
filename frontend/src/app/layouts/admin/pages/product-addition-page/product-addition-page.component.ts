import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

export interface IProduct {
  category: string
  subcategory: string
  name: string
  imageUrl: string
  price: string
  description: string
}

@Component({
  selector: 'app-product-addition-page',
  templateUrl: './product-addition-page.component.html',
  styleUrls: ['./product-addition-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductAdditionPageComponent  implements OnInit {
  expandedElement: IProduct | null;
  displayedColumns: string[] = ['name', 'category', 'subcategory', 'price', 'editButton', 'deleteButton'];
  form: FormGroup;
  categories: string[] = ['Dogs', 'Cats', 'Birds', 'Fish', 'Small Animals', 'Reptiles'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required]
    })
  }

  dataSource: MatTableDataSource<IProduct> = new MatTableDataSource([
    {name: 'Hydrogen', category: 'dogs', subcategory: 'toys', price: '5', description: 'asdasdasdsasdasdadasdasd'  ,imageUrl: 'https://static.wixstatic.com/media/82fcd3_6e02cbc1d0aa495d86c6058a64a07fb8~mv2_d_1920_1920_s_2.jpg/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_6e02cbc1d0aa495d86c6058a64a07fb8~mv2_d_1920_1920_s_2.webp'},
    {name: 'Hydrogen', category: 'cats', subcategory: 'toys', price: '5', description: 'asdasdasdsasdasdadasdasd'  ,imageUrl: 'https://static.wixstatic.com/media/82fcd3_6e02cbc1d0aa495d86c6058a64a07fb8~mv2_d_1920_1920_s_2.jpg/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_6e02cbc1d0aa495d86c6058a64a07fb8~mv2_d_1920_1920_s_2.webp'},
    {name: 'Hydrogen', category: 'dogs', subcategory: 'toys', price: '5', description: 'asdasdasdsasdasdadasdasd'  ,imageUrl: 'https://static.wixstatic.com/media/82fcd3_6e02cbc1d0aa495d86c6058a64a07fb8~mv2_d_1920_1920_s_2.jpg/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_6e02cbc1d0aa495d86c6058a64a07fb8~mv2_d_1920_1920_s_2.webp'},
    {name: 'Hydrogen', category: 'dogs', subcategory: 'toys', price: '5', description: 'asdasdasdsasdasdadasdasd'  ,imageUrl: 'https://static.wixstatic.com/media/82fcd3_6e02cbc1d0aa495d86c6058a64a07fb8~mv2_d_1920_1920_s_2.jpg/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_6e02cbc1d0aa495d86c6058a64a07fb8~mv2_d_1920_1920_s_2.webp'},
  ])

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
