const GuideBook = require('guide-book-generator');

const settings = {
  style: 'build',
  source: 'src',
  output: 'guide.html',
};

const guideBook = new GuideBook();

guideBook.generate(settings);
