class Schema {
  constructor (options) {
    this.title = options.title
    this.description = options.description
    this.example = options.example
  }
}

class ObjectSchema extends Schema {

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
  NullSchema: NullSchema
}
