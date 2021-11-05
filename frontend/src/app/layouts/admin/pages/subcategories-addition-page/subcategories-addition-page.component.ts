import {Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ISubcategory} from "../../../../shared/models/subcategory.model";
import {SubcategoryService} from "./services/subcategory.service";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-subcategories-addition-page',
  templateUrl: './subcategories-addition-page.component.html',
  styleUrls: ['./subcategories-addition-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubcategoriesAdditionPageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'editButton', 'deleteButton'];
  form: FormGroup;
  editingId: string

  dataSource: MatTableDataSource<ISubcategory>

  categories: string[] = ['Dogs', 'Cats', 'Birds', 'Fish', 'Small Animals', 'Reptiles'];

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef,
              private titleCasePipe: TitleCasePipe,
              private subcategoryService: SubcategoryService) {}

  ngOnInit() {
    this.form = this.fb.group({
      category: [null, [Validators.required]],
      name: [null, [Validators.required]]
    })
    this.getAll();
  }

  getAll(): void {
    this.subcategoryService.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(res)
      this.cdr.detectChanges()
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  submit(): void {
    this.formatData()
    this.subcategoryService.create(this.form.value).subscribe(() => {
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

  delete({_id}): void {
    this.subcategoryService.delete(_id).subscribe(() => {
      this.getAll()
    })
  }

  edit(element: ISubcategory & {_id: string}): void {
    this.form.setValue({
      name: element.name,
      category: element.category,
    })
    this.editingId = element._id
  }

  update(): void {
    this.formatData()
    this.subcategoryService.edit(this.editingId, this.form.value).subscribe(() => {
      this.getAll()
      this.editingId = null
    })
    this.resetForm()
  }

  formatData(): void {
    this.form.get('name').setValue(this.titleCasePipe.transform(this.form.value.name).trim())
  }
}
