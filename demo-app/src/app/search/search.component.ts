import { AfterViewInit, Component, HostListener, OnInit, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetServiceService } from 'src/service/get-service.service';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  employee = [];

  empList = [];
  idx = 0;

  filterInput = new FormControl();
  searchText = '';
  move = false;

  constructor(public getServ: GetServiceService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.getServ.getData().subscribe(res => {
      const response:any = res;
      this.employee = response;
    });
  }

  ngAfterViewInit() {
    this.filterInput.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe(res => {
      this.searchText = res;
      this.getFilteredEmp(this.searchText);
    })
  }

  getFilteredEmp(filterText) {
    if (filterText) {
      const filteredEmp = this.employee.filter(emp => {
        if (emp.first_name.toLowerCase().includes(filterText) || emp.last_name.toLowerCase().includes(filterText) || 
        emp.email.toLowerCase().includes(filterText) || emp.address.toLowerCase().includes(filterText)) {
          return emp;
        }
      });
      this.empList = filteredEmp;
    } else {
      this.empList = this.employee;
      this.idx = 0;
    }
  }

  onPress(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode == 40) {
      if (this.empList.length - 1 <= this.idx) {
        this.idx = 0;
      } else {
        this.idx++;
      }
    }
    if (charCode == 38) {
      if (this.idx == 0) {
        this.idx = this.empList.length - 1;
      } else {
        this.idx--;
      }
    }
  }

  highlight(i) {
    this.idx = i;
  }

  clear() {
    this.filterInput.setValue('');
    this.idx = 0;
  }

}
