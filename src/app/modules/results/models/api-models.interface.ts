// The api returns data capitalized instead of in camelCase.
// This could lead to errors because I'm not used to using objects like that.
// Converting back to camelCase makes it easier to not have to worry about it.

export interface ApiResultsModel {
  Search: ApiSingeResultModel[];
  totalResults: number;
  Response: string;
}

export interface ApiSingeResultModel {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
