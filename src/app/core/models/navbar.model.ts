import { ItemDropdown } from 'src/app/shared/components/button-dropdown/button-dropdown.component';

export const LANGUAGE_DROPDOWN_ITEMS: ItemDropdown[] = [
  {
    img: 'assets/img/br-flag.png',
    description: 'Português (Brasil)',
    isVisible: true,
    onClickFunction: 'changeToPortuguese'
  },
  {
    img: 'assets/img/usa-flag.png',
    description: 'English',
    isVisible: true,
    onClickFunction: 'changeToEnglish'
  }
]