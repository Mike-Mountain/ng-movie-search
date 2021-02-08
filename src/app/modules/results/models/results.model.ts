import {ApiResultsModel, ApiSingeResultModel} from './api-models.interface';

export interface Title {
  title: string;
  subtitle: string;
}

export class SingleResult {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;

  constructor(params: ApiSingeResultModel) {
    this.title = params.Title;
    this.year = params.Year;
    this.imdbID = params.imdbID;
    this.type = params.Type;
    this.poster = params.Poster;
  }
}

export class ResultsList {
  search: SingleResult[] | undefined;
  totalResults: number | undefined;
  response: string | undefined;

  constructor(params: ApiResultsModel) {
    if (params.Response === 'True') {
      this.search = params.Search.map(result => new SingleResult(result)) || [];
      this.totalResults = params.totalResults;
      this.response = params.Response;
    }
  }
}
