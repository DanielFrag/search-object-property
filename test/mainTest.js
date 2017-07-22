const chai = require('chai');
const searchInObject = require('../index.js');
const obj = {
    a: {
        b: {
            c: 1
        }
    }
};

describe('Module test', () => {
    it('success, should return the thenReturn value', () => {
        const result = searchInObject(obj, 'a.b', {
            thenReturn: 'found',
            elseReturn: 'nothing'
        });
        chai.expect(result).to.be.equals('found');
    });
    it('success, should return the required object property', () => {
        const result = searchInObject(obj, 'a.b');
        chai.expect(result).to.be.equals(obj.a.b);
    });
    it('fail, should return the elseReturn value', () => {
        const result = searchInObject(obj, 'a.c.b', {
            thenReturn: 'found',
            elseReturn: 'nothing'
        });
        chai.expect(result).to.be.equals('nothing');
    });
    it('fail, should return undefined', () => {
        const result = searchInObject(obj, 'a.b.c.d');
        chai.expect(result).to.not.exist;
    });
    it('fail, should return the elseReturn value', () => {
        const result = searchInObject(obj, 'a.b.c.d', {
            thenReturn: 'found',
            elseReturn: 'nothing'
        });
        chai.expect(result).to.be.equals('nothing');
    });
    it('should return elseReturn value', () => {
        const result = searchInObject(obj, 'a.b.c.d', {
            thenReturn: 'found',
            elseReturn: 'nothing'
        });
        chai.expect(result).to.be.equals('nothing');
    });
});