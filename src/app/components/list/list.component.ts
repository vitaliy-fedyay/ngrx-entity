import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public articleSub;

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleSub = this.articleService.list();
  }

  public editArticle(id) {
    this.router.navigate(['/edit', id]);
  }

  public deleteArticle(id) {
    this.articleService.remove(id);
  }

  public trackByToodFun(index, item) {
    return item.id;
  }

  public oneArticle(title: string, description: string): void {
    this.router.navigate(['/one'], { queryParams: { title, description } });
  }

}
