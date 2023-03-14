import Page from '../../templates/page';

export const enum ErrorTypes{
  Error_404 = '404',
}

class ErrorPage extends Page {
  private errorType: ErrorTypes | string;

  static TextObject: {[prop: string]: string} = {
    '404': '404 Error\nPage not found!',
  }

  constructor(errorType: ErrorTypes | string, pageId = 'error-page') {
    super(pageId);
    this.errorType = errorType;
  }

  render() {
    const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
    this.container.append(title);
    return this.container;
  }
}

export default ErrorPage;