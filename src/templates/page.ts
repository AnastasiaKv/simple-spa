class Page {
  protected container: HTMLElement;
  static TextObject = {};

  constructor(pageId: string, className = 'page') {
    this.container = document.createElement('div');
    this.container.id = pageId;
    this.container.className = className;
  }

  createHeaderTitle(text: string) {
    const title = document.createElement('h1');
    title.innerText = text;
    return title;
  }

  render() {
    return this.container;
  }
}

export default Page;