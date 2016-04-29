import upset from '../../src/d3-upset';

describe('upset', () => {
    describe('Greet function', () => {
        beforeEach(() => {
            spy(upset, 'greet');
            upset.greet();
        });

        it('should have been run once', () => {
            expect(upset.greet).to.have.been.calledOnce;
        });

        it('should have always returned hello', () => {
            expect(upset.greet).to.have.always.returned('hello');
        });
    });
});
