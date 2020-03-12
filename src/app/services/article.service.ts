import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { Store, createSelector, select } from '@ngrx/store';
import { Article } from '../models/article.model';
import { Dictionary } from '@ngrx/entity';
import * as fromArticleReducer from './../reducers/article.reducer';
import * as ArticleActions from './../actions/article.actions';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private allArticle;
  private articleById;
  constructor(private store: Store<AppState>) {

    this.allArticle = createSelector(
      fromArticleReducer.selectAll,
      (entities) => {
        return entities;
      }
    );

    this.articleById = createSelector(
      fromArticleReducer.selectEntities,
      (entities: Dictionary<Article>, props: { id: number }) => {
        return entities[props.id];
      }
    );
  }

  public add(data: Article) {
    data.id = new Date().getDate();
    this.store.dispatch(new ArticleActions.AddArticle(data));
  }

  public list(): any {
    this.store.pipe(select(this.allArticle));
  }

  public remove(id: number) {
    this.store.dispatch(new ArticleActions.RemoveArticle(id));
  }

  public getDetail(id: number) {
    return this.store.pipe(select(this.articleById, { id }));
  }

  public edit(id: number, changes: Article) {
    this.store.dispatch(new ArticleActions.UpdateArticle(id, changes));
  }
}
