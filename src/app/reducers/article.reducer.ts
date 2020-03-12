import { Action } from '@ngrx/store';
import * as ArticleActions from './../actions/article.actions';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Article } from '../models/article.model';


export interface ArticleState extends EntityState<Article> {

}

export const adapter: EntityAdapter<Article> =
  createEntityAdapter<Article>({
  });

const initialState: Article = {} as Article;


export const initialArticleState: ArticleState = adapter.getInitialState();


export function articleReducers(state = initialArticleState, action: ArticleActions.Actions ) {

  switch (action.type) {
    case ArticleActions.ADD_ARTICLE:
      return adapter.addOne(action.payload, state);

    case ArticleActions.UPDATE_ARTICLE:

      if (state.entities[action.id] === undefined) {
        return state;
      }
      return  adapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case ArticleActions.REMOVE_ARTICLE:
      return  adapter.removeOne(action.id, state);
    default:
      return state;
  }
}

export const getArticleState = createFeatureSelector<ArticleState>('articles');


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors(getArticleState);
