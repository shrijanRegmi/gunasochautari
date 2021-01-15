const constructNews = (id, category, title, img, short, long, date) => {
  return {
    id,
    category: getCategoryTitle(category),
    title,
    img,
    short,
    long,
    date,
  };
}

const getCategoryTitle = (category) => {
  switch (category) {
    case 1:
      return 'विशेष';
    case 2:
      return 'राजनीतिक';
    case 3:
      return 'मनोरन्जन';
    case 4:
      return 'खेल';
    case 5:
      return 'व्यापार';
    case 6:
      return 'सम्बन्धित'
    case 7:
      return 'ब्रेकिंग'
    case 8:
      return 'लोकप्रिय'
    default:
      return '';
  }
}

const getCategoryIndex = (category) => {
  switch (category) {
    case 'विशेष':
      return 1;
    case 'राजनीतिक':
      return 2;
    case 'मनोरन्जन':
      return 3;
    case 'खेल':
      return 4;
    case 'व्यापार':
      return 5;
    case 'सम्बन्धित':
      return 6;
    case 'ब्रेकिंग':
      return 7;
    case 'लोकप्रिय':
      return 8;
    default:
      return 0;
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export {
  constructNews,
  getCategoryTitle,
  getCategoryIndex,
  shuffle,
}