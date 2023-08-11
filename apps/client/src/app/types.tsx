
// Types used in this App

// Shortened - A pair of strings, representing the original url
// given by the user and the shortened version generated by our backend. 
export type Shortened = {
    original: string;
    short: string;
  };

// UrlListProps - An Array<Shortened>, representing the set of url pairs that
// have been generated and thus must be displayed. 
export type UrlListProps = {
    urls: Array<Shortened>;
};

// ShortenUrlFormProps - A function that take a string as input, representing
// the requestShortUrl function that will communicate with the backend to
// generate a shortened url from the original. 
export type ShortenUrlFormProps = {
  requestShortUrl: (original: string) => Promise<void>;
};

