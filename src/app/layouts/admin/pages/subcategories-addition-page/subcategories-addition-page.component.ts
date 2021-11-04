import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

export interface ISubcategory {
  category: string
  name: string
}

@Component({
  selector: 'app-subcategories-addition-page',
  templateUrl: './subcategories-addition-page.component.html',
  styleUrls: ['./subcategories-addition-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubcategoriesAdditionPageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category'];
  form: FormGroup;

  dataSource: MatTableDataSource<ISubcategory> = new MatTableDataSource([
    {name: 'Hydrogen', category: 'dogs'},
    {name: 'Nitrogen',category: 'dogs'},
    {name: 'Oxygen',category: 'dogs'},
    {name: 'Fluorine',category: 'dogs'},
    {name: 'Neon',category: 'dogs'},
  ])

  categories: string[] = ['Dogs', 'Cats', 'Birds', 'Fish', 'Small Animals', 'Reptiles'];

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.form = this.fb.group({
      category: [null, [Validators.required]],
      subcategory: [null, [Validators.required]]
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // price filter
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  submit(): void {
    this.resetForm()
  }

  resetForm(): void {
    this.form.reset()
    for (const controlName in this.form.controls) {
      this.form.get(controlName).setErrors(null)
    }
  }
}
