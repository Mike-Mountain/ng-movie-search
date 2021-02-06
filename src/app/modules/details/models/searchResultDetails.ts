import {ApiDetailsModel} from './api-details-model.interface';
import {Title} from '../../results/models/results.model';
import {StringUtil} from '../../shared/utils/helpers.util';

export class SearchResultDetails {
  title: string;
  altTitle: Title | undefined;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: [];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbId: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;

  constructor(params: ApiDetailsModel) {
    this.title = params.Title;
    this.altTitle = StringUtil.formatTitle(params.Title);
    this.year = params.Year;
    this.rated = params.Rated;
    this.runtime = params.Runtime;
    this.released = params.Released;
    this.genre = params.Genre;
    this.director = params.Director;
    this.actors = params.Actors;
    this.plot = params.Plot;
    this.language = params.Language;
    this.country = params.Country;
    this.awards = params.Awards;
    this.poster = params?.Poster;
    this.ratings = params.Ratings;
    this.metascore = params.Metascore;
    this.imdbRating = params.imdbRating;
    this.imdbVotes = params.imdbVotes;
    this.imdbId = params.imdbId;
    this.type = params.Type;
    this.dvd = params.DVD;
    this.boxOffice = params.BoxOffice;
    this.production = params.Production;
    this.website = params.Website;
    this.response = params.Response;
  }
}
