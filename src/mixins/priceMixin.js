export default {
  methods: {
    formatPrice(price, currency) {
      let symbol = '';
      switch (currency) {
        case 'rub':
          symbol = '₽';
          break;
        case 'usd':
          symbol = '$';
          break;
        default:
          symbol = ' уе';
      }
      const formattedPrice = Number(price).toLocaleString('ru-RU');
      return `${formattedPrice} ${symbol}`;
    },
  },
};
