export const cryptoLiveData = [
  { time: "00:00", price: 0 },
  { time: "04:00", price: 400 },
  { time: "08:00", price: 800 },
  { time: "12:00", price: 380 },
  { time: "16:00", price: 480 },
  { time: "20:00", price: 700 },
  { time: "23:59", price: 2000 },
];

export const crypto1D = [...cryptoLiveData];

export const crypto7D = Array.from({ length: 7 }, (_, i) => ({
  time: `Day ${i + 1}`,
  price: Math.floor(Math.random() * 2000) + 100, // Random price between 100-2000
}));

export const crypto1M = Array.from({ length: 30 }, (_, i) => ({
  time: `Day ${i + 1}`,
  price: Math.floor(Math.random() * 2500) + 200, // Random price between 200-2500
}));

export const crypto3M = Array.from({ length: 30 }, (_, i) => ({
  time: `Day ${i * 3 + 1}`,
  price: Math.floor(Math.random() * 3000) + 300, // Random price between 300-3000
}));

export const crypto1Y = Array.from({ length: 52 }, (_, i) => ({
  time: `Week ${i + 1}`,
  price: Math.floor(Math.random() * 5000) + 500, // Random price between 500-5000
}));

export const audits = [
  {
    title: "Go+ Security",
    status: "alert",
    count: "3 issues",
  },
  {
    title: "Quick Intel",
    status: "alert",
    count: "0 issues",
  },
  {
    title: "Token Sniffer",
    status: "information",
    count: "75/100",
  },
  {
    title: "Honeypot.IS",
    status: "success",
    count: "0 issues",
  },
];
