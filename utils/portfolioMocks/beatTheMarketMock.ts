export enum BeatMarketImages {
  HEADER_MAIN = '/img/BeatTheMarket/header-main.webp',
  MONITORING_RESULTS = '/img/BeatTheMarket/monitoring-results.webp',
  CANDIDATES = '/img/BeatTheMarket/candidates.svg',
  CHART_MOVEMENT = '/img/BeatTheMarket/chart-movement.webp',
  CIRCLE_ROCKET = '/img/BeatTheMarket/circle-rocket.webp',
  CREATE_ACCOUNT = '/img/BeatTheMarket/create-account.webp',
  CREATE_APP = '/img/BeatTheMarket/create-app.svg',
  FEATURES_1 = '/img/BeatTheMarket/features-1.webp',
  FEATURES_2 = '/img/BeatTheMarket/features-2.webp',
  FEATURES_3 = '/img/BeatTheMarket/features-3.webp',
  FEATURES_4 = '/img/BeatTheMarket/features-4.webp',
  FEATURES_5 = '/img/BeatTheMarket/features-5.webp',
  GAME_FIRE = '/img/BeatTheMarket/fire.svg',
  PUZZLES = '/img/BeatTheMarket/puzzles.webp',
  RESULTS = '/img/BeatTheMarket/results.webp',
  SUBSCRIPTIONS = '/img/BeatTheMarket/subscriptions.webp',
  TRADING_RESULT = '/img/BeatTheMarket/trading-result.webp',
  PLATFORMS = '/img/BeatTheMarket/platforms.svg',
  TRADING = '/img/BeatTheMarket/trading.svg',
  BACKGROUND_ROCKET = '/img/BeatTheMarket/background-rocket.webp',
}

export const BEAT_THE_MARKET = {
  mainScreen: {
    title: 'BEAT THE MARKET',
    description: 'MULTI-PLATFORM STOCK TRADING GAME: HAVE FUN OR NAIL TRADING SKILLS',
    purpose:
      'Get into the environment of stock trading, make the right decisions and learn to earn more!',
    additionalInfo: [
      {
        title: 'Industry:',
        description: 'Gaming',
      },
      {
        title: 'Timeline:',
        description: 'Released Project',
      },
      {
        title: 'Type of project:',
        description: 'React native app',
      },
    ],
    image: BeatMarketImages.HEADER_MAIN,
  },
  goals: {
    title: 'Goals',
    rows: [
      {
        icon: BeatMarketImages.CREATE_APP,
        text: 'Create a react native app available on all platforms',
      },
      {
        icon: BeatMarketImages.PLATFORMS,
        text: 'Keep the platform’s functionality and convenience',
      },
      {
        icon: BeatMarketImages.CANDIDATES,
        text: 'Drive candidates engagement ',
      },
      {
        icon: BeatMarketImages.TRADING,
        text: 'Simulate the trading environment',
      },
      {
        icon: BeatMarketImages.GAME_FIRE,
        text: 'Make the game interesting and interactive (sound effects, etc.)',
      },
    ],
  },
  project: {
    title: 'Project',
    description: `Interactive Multi-Platform Stock Trading Game`,
    infoRows: [
      'Beat the Market is a game that you can play on Android and iOS devices (incl., iPads and iPods) and a web platform. It simulates the stock trading environment, allowing one to register as an investor and manipulate the assets. ',
      'Pick the subscription and the level to start the game, proceed from level to level due to successful trading results, buy the stocks of Tesla, Microsoft, or Facebook, and monitor the price charts to react in time. Learn to plan, estimate your chances, and trade successfully! ',
    ],
    image: BeatMarketImages.CIRCLE_ROCKET,
    backgroundImage: BeatMarketImages.BACKGROUND_ROCKET,
  },
  solution: {
    title: 'The solution provided:',
    description:
      'Based on the client’s requirements, the IvorySoft teams suggested the creation of the react native app with one code development. The whole system is being compiled and displayed the same way on all platforms.  ',
    image: BeatMarketImages.PUZZLES,
  },
  features: {
    title: 'Features:',
    rows: [
      {
        icon: BeatMarketImages.CREATE_ACCOUNT,
        text: 'Creating an account and registering as an investor, trader',
        image: BeatMarketImages.FEATURES_1,
      },
      {
        icon: BeatMarketImages.SUBSCRIPTIONS,
        text: 'Managing subscriptions according to the funding of the account',
        image: BeatMarketImages.FEATURES_2,
      },
      {
        icon: BeatMarketImages.TRADING_RESULT,
        text: 'Possibility to proceed from one level to another based on trading results ',
        image: BeatMarketImages.FEATURES_3,
      },
      {
        icon: BeatMarketImages.MONITORING_RESULTS,
        text: 'Monitoring current results on a leader board',
        image: BeatMarketImages.FEATURES_4,
      },
      {
        icon: BeatMarketImages.CHART_MOVEMENT,
        text: 'Having price movements chart to react, make prognosis, plan or buy in time',
        image: BeatMarketImages.FEATURES_5,
      },
    ],
  },
  results: {
    title: 'Results:',
    rows: [
      'Now available on all platforms',
      'Simulation of a true environment',
      'Great user experience with fun and interaction',
      'Amazing user convenience',
    ],
    image: BeatMarketImages.RESULTS,
  },
};
