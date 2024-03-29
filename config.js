// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Charles',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Good night!',

  // Layout
  bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: '5d65b74cabd2f4f36204d4e159f30cf9', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '48.856613',
  defaultLongitude: '2.352222',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/'
    },
    {
      id: '2',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/',
    },
    {
      id: '3',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com'
    },
    {
      id: '5',
      name: 'Drive',
      icon: 'cloud',
      link: 'https://drive.google.com/drive/u/0/folders/0B4cjvGDahqrOaXU2X05fWkdxQUE?resourcekey=0-YNuRpuVtQTHDcIb69yCgvg',
    },
    {
      id: '4',
      name: 'Hackernews',
      icon: 'newspaper',
      link: 'https://news.ycombinator.com/',
    },
    {
      id: '6',
      name: 'Trello',
      icon: 'trello',
      link: 'https://trello.com/',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Reddit',
      icon: 'coffee',
      link: 'https://reddit.com'
    },
    {
      id: '2',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '5',
      name: 'Discord',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
    {
      id: '3',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '4',
      name: 'Soundcloud',
      icon: 'waves',
      link: 'https://soundcloud.com/',
    },
    {
      id: '6',
      name: 'Linkedin',
      icon: 'linkedin',
      link: 'https://linkedin.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'wrench',
      id: '1',
      links: [
        {
          name: 'Gollum',
          link: 'http://gollum.priv.cloud.kbrwadventure.com/Home',
        },
        {
          name: 'Chef',
          link: 'https://chef.priv.cloud.kbrwadventure.com/',
        },
        {
          name: 'Jenkins',
          link: 'http://jenkins01.priv.cloud.kbrwadventure.com/',
        },
        {
          name: 'Github',
          link: 'https://github.com',
        },
      ],
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'Reddit',
          link: 'https://www.reddit.com/hot',
        },
        {
          name: 'Hackernews',
          link: 'https://news.ycombinator.com/',
        },
        {
          name: "Facebook",
          link: 'https://facebook.com'
        },
        {
          name: "Twitch",
          link: 'https://twitch.tv'
        }
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Spotify',
          link: 'https://www.spotify.com',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          name: 'Hashnode',
          link: 'https://www.hashnode.com',
        },
        {
          name: 'Pocket',
          link: 'https://www.pocket.com',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Front',
          link: 'https://www.reddit.com/r/Frontend/',
        },
        {
          name: 'Rust',
          link: 'https://www.reddit.com/r/rust/',
        },
        {
          name: 'Go',
          link: 'https://www.reddit.com/r/golang/',
        },
        {
          name: 'Repos',
          link: 'https://github.com/migueravila',
        },
      ],
    },
  ],
};
