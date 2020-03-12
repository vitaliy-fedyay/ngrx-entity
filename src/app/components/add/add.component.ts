import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public article = {} as Article;
  constructor(
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
  }

  addNewArticle(form) {
    if (form.valid) {
      this.articleService.add(this.article);
      this.router.navigate(['/list']);
    }
  }

}
