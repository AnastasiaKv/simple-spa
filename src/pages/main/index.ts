import Page from '../../templates/page';

class MainPage extends Page {
  static TextObject = {
    MainTitle: 'Main Page',
  }

  constructor(pageId = 'main-page') {
    super(pageId);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;