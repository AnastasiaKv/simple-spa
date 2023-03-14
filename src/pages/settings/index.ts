import Page from '../../templates/page';

class SettingsPage extends Page {
  static TextObject = {
    SettingsTitle: 'Settings Page',
  }

  constructor(pageId = 'settings-page') {
    super(pageId);
  }

  render() {
    const title = this.createHeaderTitle(SettingsPage.TextObject.SettingsTitle);
    this.container.append(title);
    return this.container;
  }
}

export default SettingsPage;