import { Component, OnInit, ViewChild } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ICar} from '../../models/ICar';
import { MatTableDataSource } from '@angular/material/table';

@Component
({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss'],
})
export class ListCarsComponent implements OnInit
{
  listCars!: ICar[];
  displayedColumns: string[] = ['id', 'model', 'number', 'color', 'year', 'type', 'isNew', 'vEngine', 'actions'];
  dataSource!: MatTableDataSource<ICar>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _carService: CarsService) {}

  private getAllCars()
  {
    this._carService.getAllCars().subscribe
    ({
      next: (data) => 
      {
        this.listCars = data,
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void  
  { 
    this.getAllCars();
  };

  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) 
      this.dataSource.paginator.firstPage();
  }
  deleteCar(id: number): void
  {
    this._carService.deleteCarById(id).subscribe
    ({
      next: () => 
      {
        alert('Seccess');
        this._carService.subject.next(id);
      },
      error: (err) => console.log(err),
    })
  }
}