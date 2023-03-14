import Page from '../../templates/page';

class StatisticsPage extends Page {
  static TextObject = {
    StatisticsTitle: 'Statistics Page',
  }

  constructor(pageId = 'statisitcs-page') {
    super(pageId);
  }

  render() {
    const title = this.createHeaderTitle(StatisticsPage.TextObject.StatisticsTitle);
    this.container.append(title);
    return this.container;
  }
}

export default StatisticsPage;