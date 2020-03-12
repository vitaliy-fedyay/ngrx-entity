import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Article } from './../models/article.model';


export const ADD_ARTICLE = '[ARTICLE] Add';
export const REMOVE_ARTICLE = '[ARTICLE] Remove';
export const UPDATE_ARTICLE = '[ARTICLE] Update';


export class AddArticle implements Action {
  readonly type = ADD_ARTICLE;
  constructor(public payload: Article) { }
}

export class UpdateArticle implements Action {
  readonly type = UPDATE_ARTICLE;
  constructor(public id: number, public changes) { }
}

export class RemoveArticle implements Action {
  readonly type = REMOVE_ARTICLE;
  constructor(public id: number) { }
}


export type Actions = AddArticle | UpdateArticle | RemoveArticle;
