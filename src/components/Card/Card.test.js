import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Card from './index';


afterEach(cleanup)

const data = {
  name: "Plano P",
  id: 5,
  cycle: {
    monthly: {
      priceRenew: "24.19",
      priceOrder: "24.19",
      months: 1
    },
    semiannually: {
      priceRenew: "128.34",
      priceOrder: "128.34",
      months: 6
    },
    biennially: {
      priceRenew: "393.36",
      priceOrder: "393.36",
      months: 24
    },
    triennially: {
      priceRenew: "561.13",
      priceOrder: "561.13",
      months: 36
    },
    quarterly: {
      priceRenew: "67.17",
      priceOrder: "67.17",
      months: 3
    },
    annually: {
      priceRenew: "220.66",
      priceOrder: "220.66",
      months: 12
    }
  }
};

const period = 'annually';

describe('test of Card component', () => {
  it('should be render a card', () => {
    const { getByText } = render(
      <Card data={data} period={period} />
    );

    expect(getByText('Plano P')).toBeTruthy();
  });

  it('should be calculate discount', () => {
    const { getByText } = render(
      <Card data={data} period={period} />
    );

    expect(getByText('R$ 132,40')).toBeTruthy();
  })

  it('should be calculate discount per month', () => {
    const { getByText } = render(
      <Card data={data} period={period} />
    );

    expect(getByText('11,03')).toBeTruthy();
  })

  it('should be calculate discount total', () => {
    const { getByText } = render(
      <Card data={data} period={period} />
    );

    expect(getByText('economize R$ 88,26')).toBeTruthy();
  })
});