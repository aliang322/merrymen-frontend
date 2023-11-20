<!-- StockViewer.vue -->
<template>
    <div>
      <h2>Stock Data</h2>
      <button @click="fetchStockData">Fetch Stock Data</button>
  
      <div v-if="stockData">
        <pre>{{ stockData }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import yfinance from 'yfinance';
  
  export default {
    data() {
      return {
        stockData: null,
      };
    },
    methods: {
      async fetchStockData() {
        try {
          const symbol = 'AAPL';  // Replace with the desired stock symbol
          const stockData = await yfinance.quote(symbol);
          this.stockData = JSON.stringify(stockData, null, 2);
        } catch (error) {
          console.error('Error fetching stock data', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* Your existing styles */
  </style>
  