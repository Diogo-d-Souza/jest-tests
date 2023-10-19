import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('Tshirt', 50.5);
    expect(sut).toHaveProperty('name', 'Tshirt');
    expect(sut).toHaveProperty('price', 50.5);
  });
});
