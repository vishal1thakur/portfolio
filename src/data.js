import {v4 as uuidv4} from 'uuid';

function projects() {
  return [
    {
      name: 'GameTown',
      type: 'REACT',
      cover:
        'https://drive.google.com/open?id=1GOlphUrgyH-x-llqWVj0LNx9Fk9ZjJXl',
      id: uuidv4(),
      link: '/work/react/gametown',
      date: 'April 2021',
      description:
        'This gaming blog lists trending, popular and upcoming video games while further showing the details of the game on click. It fetches the gaming data from the api provided by rawg.io and uses Redux to manage state.',
      big: 'https://docs.google.com/uc?export=download&id=1KFQ5VUX6Kh-T9xljzfSGpBflFaFEwWcs',
      bg: '#DDC9E8',
    },

    {
      name: 'Smart RCO',
      type: 'UX / UI',
      cover:
        'https://docs.google.com/uc?export=download&id=1RMAXwnGyE-3aiOcH1GJ2FFvJCo1fJ9HX',
      id: uuidv4(),
      link: '/work/ux/rco',
      date: 'March 2020 - October 2020',
      description: 'How should the tedious task of ad bidding be automated?',
      big: 'https://docs.google.com/uc?export=download&id=1nNrW4yV4ytBsyoXeJ6SpBOuiKtcsG_7_',
      bg: '#F2F7FE',
    },

    {
      name: 'Rangeen',
      type: 'JAVASCRIPT',
      cover:
        'https://docs.google.com/uc?export=download&id=1MgDFjhubfdV8YJEGXMYVkG2VDT8Pb25G',
      id: uuidv4(),
      date: 'March 2021',
      external: 'https://vishalthakur-rangeen.netlify.app/',
      description: 'A website to generate, customize and save color palettes',
      big: 'https://docs.google.com/uc?export=download&id=1Rn6hRjr2JnZTAqdevaCrUgDUakwZA8D6',
      bg: '#F3F9FF',
    },
    {
      name: 'HYMN Music',
      type: 'REACT',
      cover:
        'https://docs.google.com/uc?export=download&id=1JEX5s2c4xx2305_FEc5jFP-4BCnQPgGs',
      id: uuidv4(),
      link: '/work/react/hymn',
      date: 'March 2021',
      description:
        'A minimal music player which loops through a native content library, using React Hooks for state management.',
      big: 'https://docs.google.com/uc?export=download&id=1TUVKOdMrjQIOco5-STn5ugK6AMGSlylY',
      bg: '#FFE3CD',
    },
    {
      name: 'Pictel',
      type: 'JAVASCRIPT',
      cover:
        'https://docs.google.com/uc?export=download&id=1vxuwwXmfxil3Qim6auqNeIuV-WAsWDVi',
      id: uuidv4(),
      external: 'https://vishalthakur-pictel.netlify.app/',
      date: 'March 2021',
      description:
        'Find royalty free stock images and videos. Data fetched through the api provided by pexels.com',
      big: 'https://docs.google.com/uc?export=download&id=1S4aWBrMnE6awaNZr7Unhu5VTIy48l2jE',
      bg: '#EAFDFF',
    },
    {
      name: 'CinePhile',
      type: 'REACT',
      cover:
        'https://docs.google.com/uc?export=download&id=1zC_KY4_g3PlfSXMjqbCsDrwbn0dSbkur',
      id: uuidv4(),
      link: '/work/react/cinephile',
      date: 'May 2021',
      description:
        'A website to discover trending shows and tv series. This project fetches the movie data from the api provided by themoviedb.org and uses React Hooks to manage state.',
      big: 'https://docs.google.com/uc?export=download&id=1xKS0aeU5pZXwkbfhw1uET0o5WYrGtfmc',
      bg: '#EEDDA5',
    },
    {
      name: 'Nomos',
      type: 'UX / UI',
      cover:
        'https://docs.google.com/uc?export=download&id=1o8MMIIevvzPdvf6cHODCM8C0OSNXKDRQ',
      id: uuidv4(),
      link: '/work/ux/nomos',
      date: 'December 2020',
      description: 'How can 1 person manage 2000 autonomous delivery vehicles?',
      big: 'https://docs.google.com/uc?export=download&id=1WEaomfB00uAWq4j-izK0ufPuoanZy_W8',
      bg: '#E1ECF5',
    },
    {
      name: 'ToDo List',
      type: 'JAVASCRIPT',
      cover:
        'https://docs.google.com/uc?export=download&id=1j6vgK9KCSa8-ambZVcWc6xrRNGSLtwtH',
      id: uuidv4(),
      external: 'https://vishalthakur-todo.netlify.app/',
      date: 'March 2021',
      description: 'A minimal ToDo List with custom css animations.',
      big: 'https://docs.google.com/uc?export=download&id=1QaI7qqGjUGgkebEXVYL6X0UEqW5EHdhJ',
      bg: '#4E8BAB',
    },
    {
      name: 'OBS Visualizer',
      type: 'UX / UI',
      cover:
        'https://docs.google.com/uc?export=download&id=1U0FMWUDWpGey1a9fuC3dLlSH22R01X4y',
      id: uuidv4(),
      link: '/work/ux/obs',
      date: 'February 2020 - November 2020',
      description:
        'How should tagged sports video’s be visualized for fast quality checking?',
      big: 'https://docs.google.com/uc?export=download&id=1_gQGnPBYPjmtEf51J4cs6F7d1Ck9TYd0',
      bg: '#FEF6FF',
    },
  ];
}

export default projects;
