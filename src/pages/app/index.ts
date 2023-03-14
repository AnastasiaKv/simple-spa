import Header from '../../components/header';
import Page from '../../templates/page';
import MainPage from '../main';
import SettingsPage from '../settings';
import StatisticsPage from '../statistics';
import ErrorPage from '../error';
import { ErrorTypes } from '../error';

export const enum PageHashs{
  MainPage = 'main',
  SettingsPage = 'settings',
  StatisticsPage = 'statistics',
  ErrorPage = 'error',
}

class App {
  private static container = document.body;
  private static defaultPageId: string = 'current-page';
  private header: Header;

  static renderNewPage(pageHash: string) {
    const currentPageHTML = document.getElementById(this.defaultPageId);
    if (currentPageHTML) currentPageHTML.remove();

    let page: Page | null;

    switch(pageHash) {
      case '':
      case PageHashs.MainPage: page = new MainPage();
        break;
      case PageHashs.SettingsPage: page = new SettingsPage();
        break;
      case PageHashs.StatisticsPage: page = new StatisticsPage();
        break;
      default: page = new ErrorPage(ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = this.defaultPageId;
      this.container.append(pageHTML);
    }
  }
  
  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    })
  }

  constructor(){
    this.header = new Header('header', 'header');
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage(PageHashs.MainPage);
    this.enableRouteChange();
  }
}

export default App;