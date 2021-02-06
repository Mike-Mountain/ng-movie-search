import {ApiResultsModel, ApiSingeResultModel} from './api-models.interface';

function formatTitle(title: string): Title | undefined {
  return title.includes(':') ?
    {
      title: title.split(':')[0],
      subtitle: title.split(':')[1]
    } :
    undefined;
}

export interface Title {
  title: string;
  subtitle: string;
}

export class SingleResult {
  title: string;
  altTitle: Title | undefined;
  year: string;
  imdbID: string;
  type: string;
  poster: string;

  constructor(params: ApiSingeResultModel) {
    this.title = params.Title;
    this.altTitle = formatTitle(params.Title);
    this.year = params.Year;
    this.imdbID = params.imdbID;
    this.type = params.Type;
    this.poster = params.Poster;
  }
}

export class ResultsList {
  search: SingleResult[];
  totalResults: number;
  response: string;

  constructor(params: ApiResultsModel) {
    this.search = params.Search.map(result => new SingleResult(result)) || [];
    this.totalResults = params.totalResults;
    this.response = params.Response;
  }
}
