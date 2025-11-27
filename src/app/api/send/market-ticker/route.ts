
import { NextResponse } from 'next/server';

type ApiQuote = {
    c: number; // current price
    d: number; // change
    dp: number; // percent change
};

const symbols = [
    { symbol: '^GSPC', displayCode: 'SPX', tvSymbol: 'SP:SPX', label: 'S&P 500', pill: 'bg-red-600' },
    { symbol: '^NDX', displayCode: 'NDX', tvSymbol: 'TVC:NDX', label: 'Nasdaq 100', pill: 'bg-blue-600' },
    { symbol: 'EURUSD', displayCode: 'EUR', tvSymbol: 'FX:EURUSD', label: 'EUR/USD', pill: 'bg-sky-600' },
    { symbol: 'BINANCE:BTCUSDT', displayCode: 'BTC', tvSymbol: 'BINANCE:BTCUSDT', label: 'Bitcoin', pill: 'bg-orange-500' },
    { symbol: 'BINANCE:ETHUSDT', displayCode: 'ETH', tvSymbol: 'BINANCE:ETHUSDT', label: 'Ethereum', pill: 'bg-indigo-500' },
    { symbol: 'AAPL', displayCode: 'AAPL', tvSymbol: 'NASDAQ:AAPL', label: 'Apple', pill: 'bg-gray-600' },
    { symbol: 'TSLA', displayCode: 'TSLA', tvSymbol: 'NASDAQ:TSLA', label: 'Tesla', pill: 'bg-red-500' },
    { symbol: 'NVDA', displayCode: 'NVDA', tvSymbol: 'NASDAQ:NVDA', label: 'Nvidia', pill: 'bg-green-600' },
    { symbol: 'MSFT', displayCode: 'MSFT', tvSymbol: 'NASDAQ:MSFT', label: 'Microsoft', pill: 'bg-blue-500' },
];

// Fallback data in case API fails or key is missing
const MOCK_DATA = [
    {
        code: 'SPX',
        symbol: 'SP:SPX',
        name: 'S&P 500',
        price: 4567.89,
        change: 12.34,
        changePct: 0.27,
        pillClass: 'bg-red-600',
    },
    {
        code: 'NDX',
        symbol: 'TVC:NDX',
        name: 'Nasdaq 100',
        price: 15987.65,
        change: -45.67,
        changePct: -0.29,
        pillClass: 'bg-blue-600',
    },
    {
        code: 'EUR',
        symbol: 'FX:EURUSD',
        name: 'EUR/USD',
        price: 1.0987,
        change: 0.0012,
        changePct: 0.11,
        pillClass: 'bg-sky-600',
    },
    {
        code: 'BTC',
        symbol: 'BINANCE:BTCUSDT',
        name: 'Bitcoin',
        price: 37123.45,
        change: 1234.56,
        changePct: 3.44,
        pillClass: 'bg-orange-500',
    },
    {
        code: 'ETH',
        symbol: 'BINANCE:ETHUSDT',
        name: 'Ethereum',
        price: 2045.67,
        change: 89.12,
        changePct: 4.56,
        pillClass: 'bg-indigo-500',
    },
    {
        code: 'AAPL',
        symbol: 'NASDAQ:AAPL',
        name: 'Apple',
        price: 189.45,
        change: 1.23,
        changePct: 0.65,
        pillClass: 'bg-gray-600',
    },
    {
        code: 'TSLA',
        symbol: 'NASDAQ:TSLA',
        name: 'Tesla',
        price: 234.56,
        change: -2.34,
        changePct: -0.99,
        pillClass: 'bg-red-500',
    },
    {
        code: 'NVDA',
        symbol: 'NASDAQ:NVDA',
        name: 'Nvidia',
        price: 485.12,
        change: 15.67,
        changePct: 3.34,
        pillClass: 'bg-green-600',
    },
    {
        code: 'MSFT',
        symbol: 'NASDAQ:MSFT',
        name: 'Microsoft',
        price: 378.90,
        change: 5.43,
        changePct: 1.45,
        pillClass: 'bg-blue-500',
    },
];

export async function GET() {
    try {
        // Use env var or fallback to the provided key
        const apiKey =
            process.env.FINNHUB_API_KEY || 'd4jabj9r01queuam73fgd4jabj9r01queuam73g0';

        if (!apiKey) {
            console.warn('Missing FINNHUB_API_KEY, using mock data');
            return NextResponse.json({ items: MOCK_DATA });
        }

        const quotes = await Promise.all(
            symbols.map(async (s) => {
                try {
                    const url = `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(
                        s.symbol
                    )}&token=${apiKey}`;

                    const res = await fetch(url, { cache: 'no-store' });
                    if (!res.ok) throw new Error(`Finnhub error: ${res.statusText}`);

                    const data = (await res.json()) as ApiQuote;

                    // Ensure we have valid numbers, otherwise fallback
                    const price = typeof data.c === 'number' ? data.c : 0;
                    const change = typeof data.d === 'number' ? data.d : 0;
                    const changePct = typeof data.dp === 'number' ? data.dp : 0;

                    // If we got zeros or invalid data, try mock
                    if (price === 0 && change === 0 && changePct === 0) {
                        const mock = MOCK_DATA.find(m => m.code === s.displayCode);
                        if (mock) return mock;
                    }

                    return {
                        code: s.displayCode,
                        symbol: s.tvSymbol,
                        name: s.label,
                        price: price,
                        change: change,
                        changePct: changePct,
                        pillClass: s.pill,
                    };
                } catch (innerErr) {
                    console.error(`Failed to fetch ${s.symbol}`, innerErr);
                    // Return mock data for this specific symbol if it fails
                    const mock = MOCK_DATA.find((m) => m.code === s.displayCode);
                    return (
                        mock || {
                            code: s.displayCode,
                            symbol: s.tvSymbol,
                            name: s.label,
                            price: 0,
                            change: 0,
                            changePct: 0,
                            pillClass: s.pill,
                        }
                    );
                }
            })
        );

        return NextResponse.json({ items: quotes });
    } catch (err) {
        console.error('market-ticker error', err);
        // Global fallback
        return NextResponse.json({ items: MOCK_DATA });
    }
}
