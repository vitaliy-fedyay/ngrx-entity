import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  private articleSub;
  public articleDetail;
  private articleId: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.articleId = params.id;
      const detail = this.articleService.getDetail(this.articleId);
      this.articleSub = detail.subscribe((res) => {
        if (res !== undefined) {
          this.articleDetail = res;
        } else {
          this.articleDetail = {};
        }
      });
    });
  }

  editArticle(form) {
    if (form.valid) {
      this.articleService.edit(this.articleId, this.articleDetail);
      this.router.navigate(['/list']);
    } else {
      console.log('Form Invalid');
    }
  }

  ngOnDestroy() {
    this.articleSub.unsubscribe();
  }

}
