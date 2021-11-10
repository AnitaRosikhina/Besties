import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubcategoryService} from "../subcategories-addition-page/services/subcategory.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ProductService} from "../../../../shared/services/product.service";
import {DecimalPipe, TitleCasePipe} from "@angular/common";
import {MatPaginator} from '@angular/material/paginator';

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
export class ProductAdditionPageComponent implements OnInit {
  expandedElement: IProduct | null;
  displayedColumns: string[] = ['name', 'category', 'subcategory', 'price', 'editButton', 'deleteButton'];
  form: FormGroup;
  categories: string[] = ['Dogs', 'Cats', 'Birds', 'Fish', 'Small Animals', 'Reptiles'];
  subcategories$: Observable<string[]>
  dataSource: MatTableDataSource<IProduct>
  editingId: string

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef,
              private titleCasePipe: TitleCasePipe,
              private decimalPipe: DecimalPipe,
              private subcategoryService: SubcategoryService,
              private productService: ProductService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      category: [null, Validators.required],
      subcategory: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, Validators.required],
    })

    this.form.get('category').valueChanges.subscribe(value => {
      this.subcategories$ = this.subcategoryService.getByCategory(value)
        .pipe(map(el => el.map(el => el.name)))
    })

    this.getAll()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files.length) {
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (e) => {
        this.form.get('imageUrl').setValue(e.target.result)
        this.cdr.detectChanges();
      }
    }
  }

  getAll(): void {
    this.productService.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator
      this.cdr.detectChanges()
    })
  }

  submit(): void {
    this.formatData()
    this.productService.create(this.form.value).subscribe(() => {
      this.getAll()
    })
    this.resetForm()
  }

  delete(event, {_id}): void {
    event.stopImmediatePropagation()
    this.productService.delete(_id).subscribe(() => {
      this.getAll()
    })
    this.resetForm()
  }

  resetForm(): void {
    this.form.reset()
    for (const controlName in this.form.controls) {
      this.form.get(controlName).setErrors(null)
    }
  }

  edit(event, element: IProduct & {_id: string}): void {
    event.stopImmediatePropagation()
    this.form.setValue({
      name: element.name,
      category: element.category,
      subcategory: element.subcategory,
      price: element.price,
      description: element.description,
      imageUrl: element.imageUrl,
    })
    this.editingId = element._id
  }

  update(): void {
    this.formatData()
    this.productService.edit(this.editingId, this.form.value).subscribe(() => {
      this.getAll()
      this.editingId = null
    })
    this.resetForm()
  }

  formatData(): void {
    this.form.get('name').setValue(this.titleCasePipe.transform(this.form.value.name).trim())
    this.form.get('price').setValue(this.decimalPipe.transform(this.form.value.price, '1.2-2'))
  }
}
