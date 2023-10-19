import { Messaging } from './message';

const createSut = () => new Messaging();

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // system under test
    const sut = createSut();
    expect(sut.sendMessage('test')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Sended message:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledWith('Sended message: ', 'test');
  });
});
