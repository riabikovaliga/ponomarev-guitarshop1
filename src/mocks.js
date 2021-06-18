const QUANTITY_GUITARS = 100;

export const promocodesMock = {
  GITARAHIT: {
    value: 10,
    type: `percent`,
  },
  SUPERGITARA: {
    value: 700,
    type: `value`,
  },
  GITARA2020: {
    value: 3500,
    type: `value`,
    maxPercent: 30,
  },
}

export const typeOfStrings = {
  electro: [`4`, `6`, `7`],
  acoustic: [`6`, `7`, `12`],
  ukulele: [`4`],
}

export const typeOfGuitars = {
  electro: `Электрогитара`,
  acoustic: `Акустика`,
  ukulele: `Укулеле`,
}

const guitarsMock = [
  {
    name: `Честер Bass`,
    type: `electro`,
    numberOfStrings: 4,
    vendorCode: `SO757575`,
    photo: `electro`,
    price: 17500,
    rating: 2,
    numberOfReviews: 15,
  },
  {
    name: `Честер Plus`,
    type: `electro`,
    numberOfStrings: 6,
    vendorCode: `SO757511`,
    photo: `electro-2`,
    price: 30000,
    rating: 4,
    numberOfReviews: 22,
  },
  {
    name: `CURT T300`,
    type: `electro`,
    numberOfStrings: 7,
    vendorCode: `SO757512`,
    photo: `electro-3`,
    price: 28000,
    rating: 5,
    numberOfReviews: 17,
  },
  {
    name: `Dania Super`,
    type: `acoustic`,
    numberOfStrings: 6,
    vendorCode: `AO757599`,
    photo: `acoustic`,
    price: 8000,
    rating: 3,
    numberOfReviews: 10,
  },
  {
    name: `Виолана 300`,
    type: `acoustic`,
    numberOfStrings: 7,
    vendorCode: `AO757598`,
    photo: `acoustic`,
    price: 4000,
    rating: 1,
    numberOfReviews: 38,
  },
  {
    name: `Виолана 12`,
    type: `acoustic`,
    numberOfStrings: 12,
    vendorCode: `AO757597`,
    photo: `acoustic`,
    price: 16000,
    rating: 5,
    numberOfReviews: 3,
  },
  {
    name: `Roman LX`,
    type: `ukulele`,
    numberOfStrings: 4,
    vendorCode: `AA757590`,
    photo: `ukulele`,
    price: 6800,
    rating: 4,
    numberOfReviews: 5,
  },
];

const generateGuitars = () => {
  const result = [];

  for (let i = 0; i < QUANTITY_GUITARS; i++) {
    result[i] = guitarsMock[Math.floor(Math.random() * guitarsMock.length)];
  }

  return result;
}

const guitars = generateGuitars();

export default guitars;
