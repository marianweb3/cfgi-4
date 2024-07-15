export const tabData: { [key: string]: { paragraphs: string[] } } = {
  Breakdown: {
    paragraphs: [
      "The Bitcoin Wise & Naive Index is the most in-depth and up-to-date tool for tracking and scoring emotion sentiments within the crypto market.",
      "The Bitcoin Wise & Naive Index scores from 0 to 100.",
      "",
    ],
  },
  Price: {
    paragraphs: [
      "Price is a simple and self explanatory algorithm.",
      "It's a building block of the Wise & Naive Index and works directly with the Momentum, Volatility, Whale Watch and Indicators Algorithms.",
      "Price is scored from the range of -10 to 10.",
    ],
  },
  Volatility: {
    paragraphs: [
      "Volatility is a more common algorithm, however ours is not just based upon the price or volume share, but also the community sentiment and emotion around a certain crypto currency alongside the general market. This makes our Volatility algorithm not so common.",
      "Volatility works directly with the Price, Volume, Volume Share, Community and Research Algorithms.",
      "Volatility is scored from the range of 0 to 10.",
    ],
  },
  Volume: {
    paragraphs: [
      "Volume is a simple and self explanatory algorithm.",
      "Like Price, it's a building block of the Wise & Naive Index. Volume works directly with the Volume Share, Momentum, Volatility, Exchanges and Indicators Algorithms.",
      "Volume is scored from the range of 0 to 10.",
    ],
  },
  Momentum: {
    paragraphs: [
      "Momentum is one of our more advanced algorithms. Momentum within the market has one of the biggest impacts on emotion and we make sure to score momentum on different blockchains differently dependant on their influence within the market.",
      "Momentum works directly with the Price, Volume, Volume Share, Volatility, Whale Watch, Exchanges, Indicators, Community and Research Algorithms.",
      "Momentum is scored from the range of -10 to 10.",
    ],
  },
  Indicators: {
    paragraphs: [
      "Indicators is our first AI driven algorithm that is constantly grading every single chart and crypto currency against the most popular and efficient trading indicator tools. All the way from RSI to AO, to CCI, Fibonacci Levels, even MFI. Our AI tracks over 30 different indicators at all times.",
      "Indicators works directly with the Price, Volume, Volume Share, Momentum, Volatility, Whale Watch, Exchanges, Community and Research Algorithms.",
      "Indicators is scored from the range of 0 to 50.",
    ],
  },
  Community: {
    paragraphs: [
      "Community is the purest indicator of sentiment across anything in the world. Our AI algorithm uses social media, top crypto platforms, and soon telegram to track, learn and study key words along side other factors to report back a score thats growth will be never ending.",
      "Community works directly with the Price, Momentum, Volatility and Research Algorithms.",
      "Community is scored from the range of -10 to 10.",
    ],
  },
  VolumeShare: {
    paragraphs: [
      "Volume Share is commonly looked at as 'Dominance'. It's usually a simple tool, however it's one of our more custom algorithms that scores volume on different blockchains differently because of their impact on the general, centralised and decentralised markets.",
      "Volume Share works directly with the Volume, Momentum, Volatility, Whale Watch, Exchanges and Indicators Algorithms.",
      "Volume Share is scored from the range of 0 to 10.",
    ],
  },
  Research: {
    paragraphs: [
      "Research is an important AI algorithm as its a way to effectively look at what people are thinking before they take action. Using trends from Google and data from Bing, Yahoo, Baidu and Yandex, our AI is learning, tracking and scoring keywords alongside their language used in a sentiment dominant context.",
      "Research works directly with the Price, Momentum, Volatility and Community Algorithms.",
      "Research is scored from the range of -10 to 10.",
    ],
  },
  WhaleWatch: {
    paragraphs: [
      "Whale Watch is a unique algorithm we've made to keep track of the bigger players within the market and reference their movements to the current sentiment.",
      "Whale Watch works directly with the Price and Momentum Algorithms.",
      "Whale Watch is scored from the range of -10 to 10.",
    ],
  },
  Exchanges: {
    paragraphs: [
      "Exchanges is the algorithm that lets us see the future and predict the next move more closely than any other. Using order books and user behavior on exchanges we can see strong support and harsh sell walls ahead of time, alongside other useful indicators.",
      "Exchanges works directly with the Price, Momentum and Volatility Algorithms.",
      "",
    ],
  },
};
