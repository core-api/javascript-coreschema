const getOption = function (options, property, defaultValue) {
  if (options.hasOwnProperty(property)) {
    return options[property]
  }
  return defaultValue
}

class ValidationError extends Error {
  constructor (message) {
    super(message)
    this.message = message
    this.name = 'ValidationError'
  }
}

class Schema {
  constructor (options) {
    this.title = getOption(options, 'title', null)
    this.description = getOption(options, 'description', null)
    this.default = getOption(options, 'default', null)

    this.errors = {}
  }

  fail (code) {
    const message = this.errors[code]
    throw new ValidationError(message)
  }

  validate (value) {
    return value
  }
}

class ObjectSchema extends Schema {
  constructor (options) {
    super(options)

    this.properties = getOption(options, 'properties', null)
    this.required = getOption(options, 'required', null)
    this.maxProperties = getOption(options, 'max_properties', null)
    this.minProperties = getOption(options, 'min_properties', null)
    this.patternProperties = getOption(options, 'pattern_properties', null)
    this.additionalProperties = getOption(options, 'additionalProperties', true)

    this.errors = {
      'type': `Must be an object.`,
      'invalidKey': `Object keys must be strings.`,
      'empty': `Must not be empty.`,
      'required': `This field is required.`,
      'maxProperties': `Must have no more than ${this.maxProperties} properties.`,
      'minProperties': `Must have at least ${this.minProperties} properties.`,
      'invalidProperty': `Invalid property`
    }
  }

  validate (value) {
    if (typeof value !== 'object') {
      this.fail('type')
    }
    return value
  }
}

class ArraySchema extends Schema {

}

class NumberSchema extends Schema {

}

class IntegerSchema extends Schema {

}

class StringSchema extends Schema {
  constructor (options) {
    super(options)
    this.maxLength = options.maxLength
    this.minLength = options.minLength
    this.pattern = options.pattern
    this.format = options.format
  }
}

class BooleanSchema extends Schema {

}

class NullSchema extends Schema {

}

module.exports = {
  Schema: Schema,
  ObjectSchema: ObjectSchema,
  ArraySchema: ArraySchema,
  NumberSchema: NumberSchema,
  IntegerSchema: IntegerSchema,
  StringSchema: StringSchema,
  BooleanSchema: BooleanSchema,
  NullSchema: NullSchema,
  ValidationError: ValidationError
}
