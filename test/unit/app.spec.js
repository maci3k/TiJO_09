describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return {area: 0, message: "Big null"} if area is 0', function () {
            expect(answer.calculateArea(0, 0, 0, 'Success', 'Failure')).toEqual({area: 0, message: 'Big null'});
        });

        it('should return {area: 5, message: "Success"} if a and b are reversed', function() {
            expect(answer.calculateArea(7, 2, 1, 'Success', 'Failure')).toEqual({area: 5, message: 'Success'});
            expect(answer.calculateArea(2, 7, 1, 'Success', 'Failure')).toEqual({area: 5, message: 'Success'});
        });

        it('should return {area: 1, message: "Success" if area is 1', function() {
            expect(answer.calculateArea(12, 11, 1, 'Success', 'Failure')).toEqual({area: 1, message: 'Success'});
        })

        it('should return {area: -3, message: "Failure"}} if area is negative', function() {
            expect(answer.calculateArea(7, 2, 5, 'Success', 'Failure')).toEqual({area: -3, message: 'Failure'});
            expect(answer.calculateArea(2, 7, 5, 'Success', 'Failure')).toEqual({area: -3, message: 'Failure'});
        });

        it('should return false when a or b or c is not numeric', function() {
            expect(answer.calculateArea('7', 2, 5, 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea(7, '2', 5, 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea(7, 2, '5', 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea('7', '2', 5, 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea('7', 2, '5', 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea(7, '2', '5', 'Success', 'Failure')).toEqual(false);
            expect(answer.calculateArea('7', '2', '5', 'Success', 'Failure')).toEqual(false);
        });

        it('should return false when messageSuccess or messageError is not string', function() {
            expect(answer.calculateArea(7, 2, 5, 1, 'Failure')).toEqual(false);
            expect(answer.calculateArea(7, 2, 5, 'Success', 2)).toEqual(false);
        });
    });
});
