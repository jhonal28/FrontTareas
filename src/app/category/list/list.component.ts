import { Component, OnInit  } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  categories: Category[] = [];
   
  constructor(
    public categoryService: CategoryService,    
    private router: Router
    ) { }
    
  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data: Category[])=>{
      this.categories = data;
    })  
  }
    
  deleteCategory(id:number){
    this.categoryService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(item => item.id !== id);
    })
  }

}
