import { AfterViewInit, Component, OnDestroy, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { take, takeUntil } from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-select-control',
  standalone: true,
  imports: [MatSelectModule, MatIconModule, NgxMatSelectSearchModule, ReactiveFormsModule, CommonModule, MatButtonModule],
  templateUrl: './select-control.component.html',
  styleUrl: './select-control.component.scss'
})
export class SelectControlComponent implements OnInit, AfterViewInit, OnDestroy  {

  @Input() options: any[] = [];
  @Input() placeholder: any[] = [];
  @Input() displayName: any = '';
  @Input() id: any = '';
  public optionctrl: FormControl<any> = new FormControl<any>(null);
  public optionFilterCtrl: FormControl<any> = new FormControl<any>('');

  public filteredOptions: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  protected _onDestroy = new Subject<void>();


  constructor() { }

  ngOnInit() {
    // set initial selection
    // this.optionstrl.setValue(this.options[10]);

    // load the initial bank list
    this.filteredOptions.next(this.options.slice());

    // listen for search field value changes
    this.optionFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredOptions
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: any, b: any) => a && b && a[this.id] === b[this.id];
      });
  }

  protected filterBanks() {
    if (!this.options) {
      return;
    }
    // get the search keyword
    let search = this.optionFilterCtrl.value;
    if (!search) {
      this.filteredOptions.next(this.options.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredOptions.next(
      this.options.filter(option => option.name.toLowerCase().indexOf(search) > -1)
    );
  }
  addNew(){

  }
}
