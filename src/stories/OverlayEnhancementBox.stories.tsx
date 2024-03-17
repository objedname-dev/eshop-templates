import type { Meta, StoryObj } from 'storybook-solidjs';

import { OverlayEnhancementBox } from '@/components/OverlayEnhancementBox';

const meta = {
  title: 'Components/Global/Enhancement Box',
  component: OverlayEnhancementBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OverlayEnhancementBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    enhancements: [
      {
        name: 'Burger vylepšení I',
        type: 'radio',
        ingredients: [
          {
            name: 'Cibulové kroužky',
            price: '45 Kč',
          },
          {
            name: 'Hranolky',
            price: '59 Kč',
          },
          {
            name: 'Lupínky',
            price: '39 Kč',
          },
          {
            name: 'Super dlouhý název přídavku s mezerami, který je ještě delší než by se měl vlézt',
            price: '1298,98 Kč',
          },
          {
            name: 'Superdlouhýnázevpřídavkubezmezerami,kterýjeještědelšínežbysemělvlézt',
            price: '39 Kč',
          },
        ],
      },
      {
        name: 'Burger vylepšení II',
        type: 'checkbox',
        ingredients: [
          {
            name: 'Drůbeží maso',
            price: '39 Kč',
          },
          {
            name: 'Mozzarela',
            price: '19 Kč',
          },
          {
            name: 'Plátek rajčete',
            price: '9 Kč',
          },
          {
            name: 'Salát',
            price: '39 Kč',
          },
          {
            name: 'Slanina navíc',
            price: '25 Kč',
          },
          {
            name: 'Maso navíc',
            price: '59 Kč',
          },
          {
            name: 'Kofola',
            price: '39 Kč',
          },
          {
            name: 'Víno',
            price: '239 Kč',
          },
          {
            name: 'Pivo Pilsner Urquell',
            price: '58 Kč',
          },
          {
            name: 'Super dlouhý název přídavku s mezerami, který je ještě delší než by se měl vlézt',
            price: '1298,98 Kč',
          },
          {
            name: 'Superdlouhýnázevpřídavkubezmezerami,kterýjeještědelšínežbysemělvlézt',
            price: '39 Kč',
          },
        ],
      },
      {
        name: 'Burger vylepšení III',
        type: 'checkbox',
        ingredients: [
          {
            name: 'Drůbeží maso',
            price: '39 Kč',
          },
          {
            name: 'Mozzarela',
            price: '19 Kč',
          },
          {
            name: 'Plátek rajčete',
            price: '9 Kč',
          },
          {
            name: 'Salát',
            price: '39 Kč',
          },
          {
            name: 'Slanina navíc',
            price: '25 Kč',
          },
          {
            name: 'Maso navíc',
            price: '59 Kč',
          },
          {
            name: 'Kofola',
            price: '39 Kč',
          },
          {
            name: 'Víno',
            price: '239 Kč',
          },
          {
            name: 'Pivo Pilsner Urquell',
            price: '58 Kč',
          },
          {
            name: 'Super dlouhý název přídavku s mezerami, který je ještě delší než by se měl vlézt',
            price: '1298,98 Kč',
          },
          {
            name: 'Superdlouhýnázevpřídavkubezmezerami,kterýjeještědelšínežbysemělvlézt',
            price: '39 Kč',
          },
        ],
      },
      {
        name: 'Nápoje',
        type: 'checkbox',
        ingredients: [
          {
            name: 'Coca Cola',
            price: '39 Kč',
          },
          {
            name: 'Coca Cola Zero',
            price: '39 Kč',
          },
          {
            name: 'Pepsi',
            price: '39 Kč',
          },
          {
            name: 'Kofola',
            price: '39 Kč',
          },
          {
            name: 'Kofola Vanilka',
            price: '39 Kč',
          },
          {
            name: 'Malinovka',
            price: '39 Kč',
          },
          {
            name: 'Mirinda',
            price: '39 Kč',
          },
          {
            name: 'Minerálka Magnesia Red',
            price: '39 Kč',
          },
          {
            name: 'Minerálka Hanácká Pomeranč',
            price: '39 Kč',
          },
          {
            name: 'Minerálka Hanácká Citron',
            price: '39 Kč',
          },
          {
            name: 'Minerálka Hanácká Grep',
            price: '39 Kč',
          },
          {
            name: 'Minerálka Hanácká Mango',
            price: '39 Kč',
          },
          {
            name: 'Minerálka Hanácká Zahradní směs',
            price: '39 Kč',
          },
          {
            name: 'Domácí limonáda',
            price: '39 Kč',
          },
          {
            name: 'Víno',
            price: '239 Kč',
          },
          {
            name: 'Pivo Pilsner Urquell',
            price: '58 Kč',
          },
        ],
      },
    ],
  },
};

export const WithConfigurator: Story = {
  args: {
    isOpen: true,
    isConfigurator: true,
    enhancements: [
      {
        name: 'Základ',
        type: 'radio',
        ingredients: [
          {
            name: 'Rajčatový základ',
            imageUrl: 'https://objedname.eu/user-data/factories/80/configurator/icons/rajcatovyzaklad.png',
            price: '0 Kč',
          },
          {
            name: 'Smetanový základ',
            imageUrl: 'https://objedname.eu/user-data/factories/80/configurator/icons/smetanovyzaklad.png',
            price: '0 Kč',
          },
        ],
      },
      {
        name: 'Maso a uzeniny',
        type: 'checkbox',
        ingredients: [
          {
            name: 'Kuřecí maso',
            price: '39 Kč',
            imageUrl: 'https://objedname.eu/user-data/factories/80/configurator/icons/kurecimaso.png',
          },
          {
            name: 'Mozzarela',
            price: '19 Kč',
          },
          {
            name: 'Plátek rajčete',
            price: '9 Kč',
          },
          {
            name: 'Salát',
            price: '39 Kč',
          },
          {
            name: 'Slanina navíc',
            price: '25 Kč',
            imageUrl: 'https://objedname.eu/user-data/factories/80/configurator/icons/slanina.png',
          },
          {
            name: 'Maso navíc',
            price: '59 Kč',
          },
          {
            name: 'Kofola',
            price: '39 Kč',
          },
          {
            name: 'Víno',
            price: '239 Kč',
          },
          {
            name: 'Pivo Pilsner Urquell',
            price: '58 Kč',
          },
          {
            name: 'Super dlouhý název přídavku s mezerami, který je ještě delší než by se měl vlézt',
            price: '1298,98 Kč',
          },
          {
            name: 'Superdlouhýnázevpřídavkubezmezerami,kterýjeještědelšínežbysemělvlézt',
            price: '39 Kč',
          },
        ],
      },
      {
        name: 'Zelenina a ovoce',
        type: 'checkbox',
        ingredients: [
          {
            name: 'Drůbeží maso',
            price: '39 Kč',
          },
          {
            name: 'Mozzarela',
            price: '19 Kč',
          },
        ],
      },
      {
        name: 'Sýry',
        type: 'checkbox',
        ingredients: [
          {
            name: 'Drůbeží maso',
            price: '39 Kč',
          },
          {
            name: 'Mozzarela',
            price: '19 Kč',
          },
        ],
      },
      {
        name: 'Ostatní',
        type: 'checkbox',
        ingredients: [
          {
            name: 'Drůbeží maso',
            price: '39 Kč',
          },
          {
            name: 'Mozzarela',
            price: '19 Kč',
          },
        ],
      },
    ],
    configuredEnhancements: [
      {
        name: 'Tomatový základ',
        price: '0 Kč',
        count: null,
      },
      {
        name: 'Kuřecí maso',
        price: '39 Kč',
        count: 1,
      },
      {
        name: 'Mozzarela',
        price: '39 Kč',
        count: 1,
      },
      {
        name: 'Kukuřice',
        price: '39 Kč',
        count: 1,
      },
      {
        name: 'Slanina',
        price: '39 Kč',
        count: 1,
      },
      {
        name: 'Šunka',
        price: '39 Kč',
        count: 1,
      },
      {
        name: 'Niva',
        price: '39 Kč',
        count: 1,
      },
      {
        name: 'Eidam',
        price: '39 Kč',
        count: 1,
      },
    ],
    totalConfiguredPrice: '230 Kč',
  },
};
