import {v4 as uuidv4} from 'uuid';

function projects() {
  return [
    {
      name: 'GameTown',
      type: 'REACT',
      cover:
        'https://docs.google.com/uc?export=download&id=1JoyYFvB3pKeMphqdWKL9XDkdAckvzfdL',
      id: uuidv4(),
      link: '/work/react/gametown',
      date: 'April 2021',
      description:
        'This gaming blog lists trending, popular and upcoming video games while further showing the details of the game on click. It fetches the gaming data from the api provided by rawg.io and uses Redux to manage state.',
      big:
        'https://docs.google.com/uc?export=download&id=1wFJ6Gr0JsGGFzt75rLWolVl1o7icDXCs',
    },

    {
      name: 'Smart RCO',
      type: 'UX / UI',
      cover:
        'https://docs.google.com/uc?export=download&id=1N-bRkQ-vszY57MF_pCSUb72CMKE4GVfK',
      id: uuidv4(),
      link: '/work/ux/rco',
      date: 'March 2020 - October 2020',
      description: 'How should the tedious task of ad bidding be automated?',
      big:
        'https://docs.google.com/uc?export=download&id=1Cpwccx6gpB-iDdXjklumIyuHyAk9R7Fa',
    },

    {
      name: 'Rangeen',
      type: 'JAVASCRIPT',
      cover:
        'https://docs.google.com/uc?export=download&id=1YuoasNmSpPsIcdiKT2GPssskZUjTTd7v',
      id: uuidv4(),
      date: 'March 2021',
      external: 'https://vishalthakur-rangeen.netlify.app/',
      description: 'A website to generate, customize and save color palettes',
      big:
        'https://docs.google.com/uc?export=download&id=1G8f--HOTu42lA5bhINLvLcpLFqPl5r74',
    },
    {
      name: 'HYMN Music',
      type: 'REACT',
      cover:
        'https://docs.google.com/uc?export=download&id=1-RQ2ocfzSrCghbYte_aqHt5MTrL4xHip',
      id: uuidv4(),
      link: '/work/react/hymn',
      date: 'March 2021',
      description:
        'A minimal music player which loops through a native content library, using React Hooks for state management.',
      big:
        'https://docs.google.com/uc?export=download&id=1mz5UpisDiyjwCUyzOI_LKi6p5GtzYR5Q',
    },
    {
      name: 'Pictel',
      type: 'JAVASCRIPT',
      cover:
        'https://docs.google.com/uc?export=download&id=1CL6Q-20PRbqTWXcraAI_JlIK0KUC1KOM',
      id: uuidv4(),
      external: 'https://vishalthakur-pictel.netlify.app/',
      date: 'March 2021',
      description:
        'Find royalty free stock images and videos. Data fetched through the api provided by pexels.com',
      big:
        'https://docs.google.com/uc?export=download&id=1W6lzycBRmaT0z2ImM90lnmJxSx8DGRIC',
    },
    {
      name: 'CinePhile',
      type: 'REACT',
      cover:
        'https://docs.google.com/uc?export=download&id=12cxnDu9VhldJXTn6QbUIzWXsKI9xa-Ah',
      id: uuidv4(),
      link: '/work/react/cinephile',
      date: 'May 2021',
      description:
        'A website to discover trending shows and tv series. This project fetches the movie data from the api provided by themoviedb.org and uses React Hooks to manage state.',
      big:
        'https://docs.google.com/uc?export=download&id=1qlNG3v4hThfG-Vifzh1p3WfM7DSrXbeq',
    },
    {
      name: 'Nomos',
      type: 'UX / UI',
      cover:
        'https://docs.google.com/uc?export=download&id=1w3oEawUA2ABpntYY2YbUyBXoQQ_dgjXZ',
      id: uuidv4(),
      link: '/work/ux/nomos',
      date: 'December 2020',
      description: 'How can 1 person manage 2000 autonomous delivery vehicles?',
      big:
        'https://docs.google.com/uc?export=download&id=1-VZJYq2EH39oIqJXx-mZvzla7QpZMybL',
    },
    {
      name: 'ToDo List',
      type: 'JAVASCRIPT',
      cover:
        'https://docs.google.com/uc?export=download&id=1jW4lSCeGoBkv-9RbiiEgaotONLYRsv9r',
      id: uuidv4(),
      external: 'https://vishalthakur-todo.netlify.app/',
      date: 'March 2021',
      description: 'A minimal ToDo List with custom css animations.',
      big:
        'https://docs.google.com/uc?export=download&id=1aXQKeYn8g-0yBcjD2RHyUW99m1BUrjv0',
    },
    {
      name: 'OBS Visualizer',
      type: 'UX / UI',
      cover:
        'https://docs.google.com/uc?export=download&id=15-nw550A7T9Vf-ifWhsXDW5WfzBWslZn',
      id: uuidv4(),
      link: '/work/ux/obs',
      date: 'February 2020 - November 2020',
      description:
        'How should tagged sports video’s be visualized for fast quality checking?',
      big:
        'https://docs.google.com/uc?export=download&id=1SMWMWL6IaxSCyAEDWZUKWzxiJoCGQsMq',
    },
  ];
}

export default projects;
