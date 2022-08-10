export const iconVariants = {
  opened: {
    rotate: 135,
  },
  closed: {
    rotate: 0,
  },
};

export const menuVariants = {
  opened: {
    top: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  closed: {
    top: "-100vh",
  },
};

export const linkVariants = {
  opened: {
    opacity: 1,
    y: 50,
  },
  closed: {
    opacity: 0,
    y: 0,
  },
};
