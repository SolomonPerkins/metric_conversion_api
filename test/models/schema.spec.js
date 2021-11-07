const assert = require('assert');
const convertSchema = require('../../api/models/convert');
const errorSchema = require('../../api/models/error');

describe('Error Schema', () => {

    it('Should have the errorSchema', () => {
        let eSchema = errorSchema;
        assert.notEqual(errorSchema, null, "Should not be an empty object");
    });

    it('Should update the model with correct information', () => {
        let eSchema = errorSchema;
        assert.equal(eSchema.success == null, true, 'missing success property on object');
    })
    it('Should update the model with correct message', () => {
        let eSchema = errorSchema;
        assert.equal(eSchema.message == null, true, 'missing success property on object');
    })
    
});


describe('Convert Schema', () => {

    it('Should have the convert schema', () => {
        let cSchema = convertSchema;
        assert.notEqual(cSchema, null, "Should not be an empty object");
    });

    it('Should update the model with correct information', () => {
        let eSchema = convertSchema;
        assert.equal(eSchema.success == null, true, 'missing success property on object');
    });
    
    it('Should update the model with correct data propperty', () => {
        let eSchema = convertSchema;

       assert.deepEqual(eSchema.data,{}, 'missing success property on object');
    })
    
})
