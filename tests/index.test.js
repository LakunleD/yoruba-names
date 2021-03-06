import { expect } from 'chai';
import yorubaNames from '../src/index';


describe('yoruba-names', function() {
    describe('all', function() {
        it('should return an array of names', function() {
            expect(yorubaNames.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });
    });

    describe('random', function() {
        it('should return a random name', function() {
            var randomName = yorubaNames.random();
            expect(yorubaNames.all).to.include(randomName);
        });
        it('should return a random number of names from the array', function() {
            var randomNames = yorubaNames.random(3);
            expect(randomNames).to.be.an('array');
            expect(randomNames).to.have.length(3);
            expect(yorubaNames.all).to.include(randomNames[0]);
        });
    });
    describe('Royalname', function() {
        it('should return a random royal name', function() {
            var randomName = yorubaNames.Royalname();
            expect(yorubaNames.all).to.include(randomName);
        });
        it('should return a random number of royal names from the array', function() {
            var randomNames = yorubaNames.Royalname(3);
            expect(randomNames).to.be.an('array');
            expect(randomNames).to.have.length(3);
            expect(yorubaNames.all).to.include(randomNames[0]);
        });

    });
});