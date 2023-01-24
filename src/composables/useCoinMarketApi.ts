import { ref } from 'vue';
import { ResultsDto, ResponseBody } from '../models/models';
import axios from 'axios';

const coinMarketData = ref<ResultsDto[]>();

export default function useCoinMarketApi() {
  const getcoinMarketData = () => {
    axios
      .get('/api', {
        headers: {
          'X-CMC_PRO_API_KEY': 'cf03f1ca-7856-4e4d-967d-2e7240c27a9b',
        },
      })
      .then((response) => {
        coinMarketData.value = response.data.data.map((item: ResponseBody) => {
          return {
            name: item.name,
            symbol: item.symbol,
            price: item.quote.USD.price,
            change: item.quote.USD.volume_change_24h,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    coinMarketData,
    getcoinMarketData,
  };
}
