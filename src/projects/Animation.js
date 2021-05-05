export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 400,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: {y: 75, opacity: 0},
  show: {
    y: 0,
    opacity: 1,
    transition: {duration: 1.2, ease: 'easeOut'},
  },
};

export const fade = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {duration: 2, ease: 'easeOut', delay: 0.5},
  },
};

export const fadeAbout = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {duration: 1, ease: 'easeOut'},
  },
};

export const cardAnim = {
  hidden: {y: 10},
  show: {
    y: 0,
    transition: {duration: 0.75, ease: 'easeOut', dealy: 0},
  },
};
