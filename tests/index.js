const schemas = require('../lib')

describe('Schema', function () {
  it('check that it has all the properties', function () {
    const options = {
      title: 'Hello World',
      description: 'This is an example'
    }
    const schema = new schemas.Schema(options)
    expect(schema.title).toBe('Hello World')
    expect(schema.description).toBe('This is an example')
    expect(schema.default).toBeNull()
  })
})

describe('ObjectSchema', function () {
  it('check that it has all the properties', function () {
    const options = {
      title: 'Hello World',
      description: 'This is an example'
    }
    const schema = new schemas.ObjectSchema(options)
    expect(schema.title).toBe('Hello World')
    expect(schema.description).toBe('This is an example')
  })

  it('validates successfully', function () {
    const options = {
      title: 'Hello World',
      description: 'This is an example'
    }
    const schema = new schemas.ObjectSchema(options)

    const callValidate = schema.validate({'hello': 'world'})
    expect(callValidate).toEqual({'hello': 'world'})
  })

  it('throw an error (invalid type)', function () {
    const options = {
      title: 'Hello World',
      description: 'This is an example'
    }
    const schema = new schemas.ObjectSchema(options)

    const callValidate = () => schema.validate('string')
    expect(callValidate).toThrowError(new schemas.ValidationError('Must be an object.'))
  })
})

describe('StringSchema', function () {
  it('check that it has all the properties', function () {
    const options = {
      title: 'Hello World',
      description: 'This is an example',
      minLength: 10,
      maxLength: 100,
      pattern: '^a[0-9]$',
      format: 'uri'
    }
    const schema = new schemas.StringSchema(options)
    expect(schema.title).toBe('Hello World')
    expect(schema.description).toBe('This is an example')
    expect(schema.minLength).toEqual(10)
    expect(schema.maxLength).toEqual(100)
    expect(schema.pattern).toBe('^a[0-9]$')
    expect(schema.format).toBe('uri')
  })

  it('validates successfully', function () {
    const options = {
      title: 'Hello World',
      description: 'This is an example'
    }
    const schema = new schemas.StringSchema(options)

    expect(schema.validate('123')).toBe('123')
  })
})
