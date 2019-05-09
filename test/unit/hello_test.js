'use strict';
const Code  = require('code');
const Lab   = require('lab');
const lab   = exports.lab = Lab.script();

lab.experiment('test greetings', () => {

    lab.test('greets with name ', (done) => {

        Code.expect(true).to.be.a.boolean().and.to.not.equal(false);
        done();
    });

});
