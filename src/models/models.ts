export interface ResponseBody {
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      volume_change_24h: number;
    };
  };
}

export interface ResultsDto {
  name: string;
  symbol: string;
  price: number;
  change: number;
}
