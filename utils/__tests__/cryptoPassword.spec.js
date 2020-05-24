const cryptoPassword = require('../cryptoPassword');

const mockPassword = 'senha123';


describe('cryptoPassword', () => {
it('should return crypto password not null', () => {
expect(cryptoPassword(mockPassword)).not.toBeNull();

});

it('should return crypto password with hex encode', () => {
expect(cryptoPassword(mockPassword)).toEqual("a0d48dbaa20c941c1bdf0749e436b7629d46cca990227e3b5e7fc2ab00f0bb85119d4203cf32bb8a15900d461354c268c901a24ebc803fc504d8c4510463f21d");
});
});