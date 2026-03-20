export interface Stock {
  symbol: string
  name: string
  sector: string
  price: number
  change: number
  changePercent: number
  volume: number
  marketCap: number
}

export const nifty50Stocks: Stock[] = [
  { symbol: "RELIANCE", name: "Reliance Industries", sector: "Energy", price: 2847.50, change: 45.30, changePercent: 1.62, volume: 8234567, marketCap: 1928000 },
  { symbol: "TCS", name: "Tata Consultancy Services", sector: "IT", price: 4125.80, change: -32.45, changePercent: -0.78, volume: 2345678, marketCap: 1512000 },
  { symbol: "HDFCBANK", name: "HDFC Bank", sector: "Banking", price: 1678.25, change: 23.80, changePercent: 1.44, volume: 5678901, marketCap: 1267000 },
  { symbol: "INFY", name: "Infosys", sector: "IT", price: 1523.90, change: -18.65, changePercent: -1.21, volume: 4567890, marketCap: 634000 },
  { symbol: "ICICIBANK", name: "ICICI Bank", sector: "Banking", price: 1156.40, change: 28.90, changePercent: 2.56, volume: 6789012, marketCap: 812000 },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever", sector: "FMCG", price: 2534.15, change: -8.45, changePercent: -0.33, volume: 1234567, marketCap: 595000 },
  { symbol: "SBIN", name: "State Bank of India", sector: "Banking", price: 789.30, change: 15.60, changePercent: 2.01, volume: 9876543, marketCap: 705000 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", sector: "Telecom", price: 1445.70, change: 42.30, changePercent: 3.01, volume: 3456789, marketCap: 867000 },
  { symbol: "ITC", name: "ITC Limited", sector: "FMCG", price: 467.85, change: 5.20, changePercent: 1.12, volume: 7654321, marketCap: 583000 },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", sector: "Banking", price: 1823.45, change: -45.60, changePercent: -2.44, volume: 2345678, marketCap: 362000 },
  { symbol: "LT", name: "Larsen & Toubro", sector: "Infrastructure", price: 3456.70, change: 67.80, changePercent: 2.00, volume: 1876543, marketCap: 475000 },
  { symbol: "AXISBANK", name: "Axis Bank", sector: "Banking", price: 1134.20, change: 18.90, changePercent: 1.69, volume: 4567890, marketCap: 350000 },
  { symbol: "WIPRO", name: "Wipro", sector: "IT", price: 456.30, change: -12.40, changePercent: -2.65, volume: 3456789, marketCap: 238000 },
  { symbol: "HCLTECH", name: "HCL Technologies", sector: "IT", price: 1678.90, change: 25.60, changePercent: 1.55, volume: 2345678, marketCap: 455000 },
  { symbol: "ASIANPAINT", name: "Asian Paints", sector: "Consumer", price: 2890.45, change: -52.30, changePercent: -1.78, volume: 987654, marketCap: 277000 },
  { symbol: "MARUTI", name: "Maruti Suzuki", sector: "Automobile", price: 12456.80, change: 234.50, changePercent: 1.92, volume: 567890, marketCap: 394000 },
  { symbol: "SUNPHARMA", name: "Sun Pharmaceutical", sector: "Pharma", price: 1567.40, change: 38.90, changePercent: 2.54, volume: 2134567, marketCap: 376000 },
  { symbol: "TATAMOTORS", name: "Tata Motors", sector: "Automobile", price: 987.60, change: -28.40, changePercent: -2.80, volume: 8765432, marketCap: 367000 },
  { symbol: "BAJFINANCE", name: "Bajaj Finance", sector: "Finance", price: 6789.30, change: 145.60, changePercent: 2.19, volume: 1234567, marketCap: 420000 },
  { symbol: "NESTLEIND", name: "Nestle India", sector: "FMCG", price: 2456.70, change: -15.80, changePercent: -0.64, volume: 345678, marketCap: 237000 },
  { symbol: "TITAN", name: "Titan Company", sector: "Consumer", price: 3567.80, change: 78.90, changePercent: 2.26, volume: 1456789, marketCap: 316000 },
  { symbol: "TECHM", name: "Tech Mahindra", sector: "IT", price: 1345.60, change: -35.70, changePercent: -2.59, volume: 2567890, marketCap: 131000 },
  { symbol: "POWERGRID", name: "Power Grid Corporation", sector: "Power", price: 287.45, change: 8.90, changePercent: 3.19, volume: 6789012, marketCap: 267000 },
  { symbol: "NTPC", name: "NTPC Limited", sector: "Power", price: 356.80, change: 12.40, changePercent: 3.60, volume: 7890123, marketCap: 346000 },
  { symbol: "ULTRACEMCO", name: "UltraTech Cement", sector: "Cement", price: 10234.50, change: -178.90, changePercent: -1.72, volume: 456789, marketCap: 296000 },
  { symbol: "ONGC", name: "Oil & Natural Gas Corp", sector: "Energy", price: 267.30, change: 9.80, changePercent: 3.81, volume: 8901234, marketCap: 336000 },
  { symbol: "JSWSTEEL", name: "JSW Steel", sector: "Metals", price: 876.40, change: 32.50, changePercent: 3.85, volume: 3456789, marketCap: 214000 },
  { symbol: "M&M", name: "Mahindra & Mahindra", sector: "Automobile", price: 2678.90, change: 56.70, changePercent: 2.16, volume: 2345678, marketCap: 333000 },
  { symbol: "TATASTEEL", name: "Tata Steel", sector: "Metals", price: 145.60, change: 5.80, changePercent: 4.15, volume: 12345678, marketCap: 182000 },
  { symbol: "ADANIPORTS", name: "Adani Ports", sector: "Infrastructure", price: 1234.50, change: -45.60, changePercent: -3.56, volume: 4567890, marketCap: 267000 },
  { symbol: "COALINDIA", name: "Coal India", sector: "Mining", price: 456.70, change: 18.90, changePercent: 4.32, volume: 5678901, marketCap: 281000 },
  { symbol: "BPCL", name: "Bharat Petroleum", sector: "Energy", price: 567.80, change: 23.40, changePercent: 4.30, volume: 4567890, marketCap: 123000 },
  { symbol: "GRASIM", name: "Grasim Industries", sector: "Cement", price: 2345.60, change: -67.80, changePercent: -2.81, volume: 987654, marketCap: 154000 },
  { symbol: "DRREDDY", name: "Dr. Reddy's Labs", sector: "Pharma", price: 5678.90, change: 89.30, changePercent: 1.60, volume: 567890, marketCap: 95000 },
  { symbol: "CIPLA", name: "Cipla", sector: "Pharma", price: 1456.70, change: 34.50, changePercent: 2.43, volume: 1234567, marketCap: 118000 },
  { symbol: "EICHERMOT", name: "Eicher Motors", sector: "Automobile", price: 4567.80, change: -123.40, changePercent: -2.63, volume: 345678, marketCap: 125000 },
  { symbol: "APOLLOHOSP", name: "Apollo Hospitals", sector: "Healthcare", price: 6234.50, change: 145.80, changePercent: 2.39, volume: 456789, marketCap: 90000 },
  { symbol: "DIVISLAB", name: "Divi's Laboratories", sector: "Pharma", price: 3456.70, change: -78.90, changePercent: -2.23, volume: 567890, marketCap: 92000 },
  { symbol: "HEROMOTOCO", name: "Hero MotoCorp", sector: "Automobile", price: 4234.50, change: 67.80, changePercent: 1.63, volume: 678901, marketCap: 85000 },
  { symbol: "BRITANNIA", name: "Britannia Industries", sector: "FMCG", price: 5123.40, change: -89.60, changePercent: -1.72, volume: 345678, marketCap: 123000 },
  { symbol: "BAJAJFINSV", name: "Bajaj Finserv", sector: "Finance", price: 1567.80, change: 45.60, changePercent: 3.00, volume: 1234567, marketCap: 250000 },
  { symbol: "HINDALCO", name: "Hindalco Industries", sector: "Metals", price: 567.90, change: 23.40, changePercent: 4.30, volume: 4567890, marketCap: 127000 },
  { symbol: "INDUSINDBK", name: "IndusInd Bank", sector: "Banking", price: 1234.50, change: -56.70, changePercent: -4.39, volume: 3456789, marketCap: 96000 },
  { symbol: "SBILIFE", name: "SBI Life Insurance", sector: "Insurance", price: 1456.70, change: 28.90, changePercent: 2.02, volume: 1234567, marketCap: 146000 },
  { symbol: "ADANIENT", name: "Adani Enterprises", sector: "Conglomerate", price: 2678.90, change: -98.70, changePercent: -3.55, volume: 2345678, marketCap: 305000 },
  { symbol: "TATACONSUM", name: "Tata Consumer Products", sector: "FMCG", price: 1123.40, change: 18.90, changePercent: 1.71, volume: 1567890, marketCap: 105000 },
  { symbol: "LTIM", name: "LTIMindtree", sector: "IT", price: 5234.50, change: -145.60, changePercent: -2.71, volume: 567890, marketCap: 155000 },
  { symbol: "BAJAJ-AUTO", name: "Bajaj Auto", sector: "Automobile", price: 8456.70, change: 178.90, changePercent: 2.16, volume: 345678, marketCap: 235000 },
  { symbol: "HDFCLIFE", name: "HDFC Life Insurance", sector: "Insurance", price: 645.30, change: 12.40, changePercent: 1.96, volume: 2345678, marketCap: 139000 },
  { symbol: "SHRIRAMFIN", name: "Shriram Finance", sector: "Finance", price: 2456.70, change: 78.90, changePercent: 3.32, volume: 987654, marketCap: 92000 },
]

export const sectors = [...new Set(nifty50Stocks.map(s => s.sector))]

export type SortField = 'changePercent' | 'change' | 'volume' | 'marketCap' | 'price' | 'symbol'
export type SortOrder = 'asc' | 'desc'

export function sortStocks(stocks: Stock[], field: SortField, order: SortOrder): Stock[] {
  return [...stocks].sort((a, b) => {
    let comparison = 0
    if (field === 'symbol') {
      comparison = a.symbol.localeCompare(b.symbol)
    } else {
      comparison = a[field] - b[field]
    }
    return order === 'asc' ? comparison : -comparison
  })
}

export function filterBySector(stocks: Stock[], sector: string): Stock[] {
  if (sector === 'All') return stocks
  return stocks.filter(s => s.sector === sector)
}

export function getTopGainers(stocks: Stock[], count: number = 5): Stock[] {
  return sortStocks(stocks, 'changePercent', 'desc').slice(0, count)
}

export function getTopLosers(stocks: Stock[], count: number = 5): Stock[] {
  return sortStocks(stocks, 'changePercent', 'asc').slice(0, count)
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + 'K'
  }
  return num.toString()
}

export function formatCurrency(num: number): string {
  return '₹' + num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function formatMarketCap(num: number): string {
  return '₹' + (num / 1000).toFixed(2) + 'L Cr'
}
