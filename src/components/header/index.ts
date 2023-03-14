import Component from '../../templates/component';
import { PageHashs } from '../../pages/app';

const buttons = [
  {
    id: PageHashs.MainPage,
    text: 'Main Page'
  },
  {
    id: PageHashs.SettingsPage,
    text: 'Settings Page'
  },
  {
    id: PageHashs.StatisticsPage,
    text: 'Statistics Page'
  },
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = new Component('nav', 'header__nav');
    const pageButtonsHTML = pageButtons.render();
    buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      pageButtonsHTML.append(buttonHTML);
    });
    this.container.append(pageButtonsHTML);
  }

  render() {
    this.renderPageButtons();
     return this.container;
  }
}

export default Header;