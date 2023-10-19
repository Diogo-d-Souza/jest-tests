import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstname, lastname and cpf', () => {
    const sut = createIndividualCustomer('Didas', 'Souza', '11111111');
    expect(sut).toHaveProperty('firstName', 'Didas');
    expect(sut).toHaveProperty('lastName', 'Souza');
    expect(sut).toHaveProperty('cpf', '11111111');
  });

  it('should have getname and getidn for individual customers', () => {
    const sut = createIndividualCustomer('Didas', 'Souza', '11111111');
    expect(sut.getName()).toBe('Didas Souza');
    expect(sut.getIDN()).toBe('11111111');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '22222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '22222');
  });

  it('should have getname and getidn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy', '22222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('22222');
  });
});
