const schemas = require('../lib')

describe('Schema', function () {
  it('should check that it has all the properties', function () {
    const options = {
      title: 'Hello World',
      description: 'This is an example'
    }
    const schema = new schemas.Schema(options)
    expect(schema.title).toBe('Hello World')
    expect(schema.description).toBe('This is an example')
  })
})

describe('ObjectSchema', function () {
  it('should check that it has all the properties', function () {
    const options = {
      title: 'Hello World',
      description: 'This is an example'
    }
    const schema = new schemas.Schema(options)
    expect(schema.title).toBe('Hello World')
    expect(schema.description).toBe('This is an example')
  })
})
