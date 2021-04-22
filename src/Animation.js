export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.8,
    },
  },
};

export const pageAnimationHome = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
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

export const cardAnim = {
  hidden: {y: 10},
  show: {
    y: 0,
    transition: {duration: 0.75, ease: 'easeOut', dealy: 0},
  },
};
