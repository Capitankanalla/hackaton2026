const ibex35 = [
  { symbol: "SAN.MC", name: "Banco Santander", exchange: "MC", currency: "EUR" },
  { symbol: "BBVA.MC", name: "BBVA", exchange: "MC", currency: "EUR" },
  { symbol: "IBE.MC", name: "Iberdrola", exchange: "MC", currency: "EUR" },
  { symbol: "ITX.MC", name: "Inditex", exchange: "MC", currency: "EUR" },
  { symbol: "TEF.MC", name: "Telefónica", exchange: "MC", currency: "EUR" },
  { symbol: "REP.MC", name: "Repsol", exchange: "MC", currency: "EUR" },
  { symbol: "ACS.MC", name: "ACS", exchange: "MC", currency: "EUR" },
  { symbol: "AENA.MC", name: "Aena", exchange: "MC", currency: "EUR" },
  { symbol: "MEL.MC", name: "Meliá Hotels", exchange: "MC", currency: "EUR" },
  { symbol: "FER.MC", name: "Ferrovial", exchange: "MC", currency: "EUR" },
  { symbol: "GRF.MC", name: "Grifols", exchange: "MC", currency: "EUR" },
  { symbol: "CLNX.MC", name: "Cellnex", exchange: "MC", currency: "EUR" },
  { symbol: "MAP.MC", name: "Mapfre", exchange: "MC", currency: "EUR" },
  { symbol: "SAB.MC", name: "Banco Sabadell", exchange: "MC", currency: "EUR" },
  { symbol: "ENG.MC", name: "Enagás", exchange: "MC", currency: "EUR" },
  { symbol: "NTGY.MC", name: "Naturgy", exchange: "MC", currency: "EUR" },
  { symbol: "RED.MC", name: "Redeia", exchange: "MC", currency: "EUR" },
  { symbol: "COL.MC", name: "Inmobiliaria Colonial", exchange: "MC", currency: "EUR" },
  { symbol: "IAG.MC", name: "IAG", exchange: "MC", currency: "EUR" },
  { symbol: "AMS.MC", name: "Amadeus", exchange: "MC", currency: "EUR" },
  { symbol: "ROVI.MC", name: "Laboratorios Rovi", exchange: "MC", currency: "EUR" },
  { symbol: "PHM.MC", name: "PharmaMar", exchange: "MC", currency: "EUR" },
  { symbol: "ACX.MC", name: "Acerinox", exchange: "MC", currency: "EUR" },
  { symbol: "CIE.MC", name: "CIE Automotive", exchange: "MC", currency: "EUR" },
  { symbol: "ELE.MC", name: "Endesa", exchange: "MC", currency: "EUR" },
  { symbol: "ALM.MC", name: "Almirall", exchange: "MC", currency: "EUR" },
  { symbol: "ANA.MC", name: "Acciona", exchange: "MC", currency: "EUR" },
  { symbol: "FCC.MC", name: "FCC", exchange: "MC", currency: "EUR" }
];

const usa = [
  // NASDAQ
  { symbol: "AAPL", name: "Apple", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "MSFT", name: "Microsoft", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "AMZN", name: "Amazon", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "GOOGL", name: "Alphabet Class A", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "META", name: "Meta Platforms", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "NVDA", name: "NVIDIA", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },

  // S&P500
  { symbol: "BRK.B", name: "Berkshire Hathaway", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "JNJ", name: "Johnson & Johnson", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "JPM", name: "JPMorgan Chase", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "V", name: "Visa", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "PG", name: "Procter & Gamble", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },

  // DOW JONES
  { symbol: "DIS", name: "Walt Disney", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "HD", name: "Home Depot", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "INTC", name: "Intel", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "KO", name: "Coca-Cola", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "MCD", name: "McDonald's", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" }
];

const europe = [
  // 🇩🇪 DAX 40 (XETRA → .DE)
  { symbol: "SAP.DE", name: "SAP SE", type: "stock", exchange: "XETRA", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "SIE.DE", name: "Siemens", type: "stock", exchange: "XETRA", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "BAS.DE", name: "BASF", type: "stock", exchange: "XETRA", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "BMW.DE", name: "BMW", type: "stock", exchange: "XETRA", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "VOW3.DE", name: "Volkswagen", type: "stock", exchange: "XETRA", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "DTE.DE", name: "Deutsche Telekom", type: "stock", exchange: "XETRA", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "ALV.DE", name: "Allianz", type: "stock", exchange: "XETRA", currency: "EUR", region: "EU", market: "EUROPE" },

  // 🇫🇷 CAC 40 (Euronext París → .PA)
  { symbol: "OR.PA", name: "L'Oréal", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "MC.PA", name: "LVMH", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "AIR.PA", name: "Airbus", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "BNP.PA", name: "BNP Paribas", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "ENGI.PA", name: "Engie", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "KER.PA", name: "Kering", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },

  // 🇬🇧 FTSE 100 (LSE → .L)
  { symbol: "HSBA.L", name: "HSBC Holdings", type: "stock", exchange: "LSE", currency: "GBP", region: "EU", market: "EUROPE" },
  { symbol: "BP.L", name: "BP PLC", type: "stock", exchange: "LSE", currency: "GBP", region: "EU", market: "EUROPE" },
  { symbol: "AZN.L", name: "AstraZeneca", type: "stock", exchange: "LSE", currency: "GBP", region: "EU", market: "EUROPE" },
  { symbol: "ULVR.L", name: "Unilever", type: "stock", exchange: "LSE", currency: "GBP", region: "EU", market: "EUROPE" },
  { symbol: "RIO.L", name: "Rio Tinto", type: "stock", exchange: "LSE", currency: "GBP", region: "EU", market: "EUROPE" },
  { symbol: "GSK.L", name: "GSK", type: "stock", exchange: "LSE", currency: "GBP", region: "EU", market: "EUROPE" },

  // 🇳🇱 AEX (Amsterdam → .AS)
  { symbol: "ASML.AS", name: "ASML Holding", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "AD.AS", name: "Ahold Delhaize", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "DSM.AS", name: "DSM Firmenich", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" }
];


const asia = [
  // 🇯🇵 NIKKEI 225 — JAPAN (TSE)
  { symbol: "7203.T", name: "Toyota", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "6758.T", name: "Sony", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "9984.T", name: "SoftBank Group", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "9432.T", name: "NTT Docomo", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "8306.T", name: "Mitsubishi UFJ", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "8058.T", name: "Mitsubishi Corp", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "8035.T", name: "Tokyo Electron", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "4063.T", name: "Shin-Etsu Chemical", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "6861.T", name: "Keyence", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "4502.T", name: "Takeda Pharmaceutical", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },

  // 🇭🇰 HANG SENG — HONG KONG (HKEX)
  { symbol: "0700.HK", name: "Tencent", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0941.HK", name: "China Mobile", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "3988.HK", name: "Bank of China", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "1299.HK", name: "AIA Group", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0005.HK", name: "HSBC Holdings", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0939.HK", name: "China Construction Bank", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "2318.HK", name: "Ping An Insurance", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0883.HK", name: "CNOOC", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0388.HK", name: "HKEX", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },

  // 🇨🇳 SSE / CSI 300 — CHINA (Shanghai / Shenzhen)
  { symbol: "600519.SS", name: "Kweichow Moutai", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601318.SS", name: "Ping An Insurance", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601398.SS", name: "ICBC Bank", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "600036.SS", name: "China Merchants Bank", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601857.SS", name: "PetroChina", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "000858.SZ", name: "Wuliangye Yibin", type: "stock", exchange: "SZSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "000333.SZ", name: "Midea Group", type: "stock", exchange: "SZSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "300750.SZ", name: "CATL", type: "stock", exchange: "SZSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601988.SS", name: "Bank of China", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601628.SS", name: "China Life Insurance", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" }
];

module.exports = {
  ibex35,
  usa,
  europe,
  asia
};
