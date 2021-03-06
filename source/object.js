ValidatorContext.prototype.validateObject = function validateObject(
    data,
    schema,
    dataPointerPath,
    schemaPointerPath,
) {
    if (typeof data !== "object" || data === null || Array.isArray(data)) {
        return null;
    }
    return (
        this.validateObjectMinMaxProperties(data, schema, dataPointerPath,schemaPointerPath) ||
        this.validateObjectRequiredProperties(data, schema, dataPointerPath,schemaPointerPath) ||
        this.validateObjectProperties(data, schema, dataPointerPath,schemaPointerPath) ||
        this.validateObjectDependencies(data, schema, dataPointerPath,schemaPointerPath) ||
        null
    );
};

ValidatorContext.prototype.validateObjectMinMaxProperties = function validateObjectMinMaxProperties(
    data,
    schema
) {
    var keys = Object.keys(data);
    var error;
    if (schema.minProperties !== undefined) {
        if (keys.length < schema.minProperties) {
            error = this.createError(
                ErrorCodes.OBJECT_PROPERTIES_MINIMUM,
                { propertyCount: keys.length, minimum: schema.minProperties },
                "",
                "/minProperties",
                null,
                data,
                schema
            );
            if (this.handleError(error)) {
                return error;
            }
        }
    }
    if (schema.maxProperties !== undefined) {
        if (keys.length > schema.maxProperties) {
            error = this.createError(
                ErrorCodes.OBJECT_PROPERTIES_MAXIMUM,
                { propertyCount: keys.length, maximum: schema.maxProperties },
                "",
                "/maxProperties",
                null,
                data,
                schema
            );
            if (this.handleError(error)) {
                return error;
            }
        }
    }
    return null;
};

ValidatorContext.prototype.validateObjectRequiredProperties = function validateObjectRequiredProperties(
    data,
    schema
) {
    if (schema.required !== undefined) {
        for (var i = 0; i < schema.required.length; i++) {
            var key = schema.required[i];
            var propertyCondition = schema.properties[key].condition;
            if (propertyCondition) {
                var conditionResult;
                try {
					/*jslint evil: true */
                    conditionResult = new Function(
                        "model",
                        "rootModel",
                        "parentModel",
                        "return "+propertyCondition+";"
                    )(this.root, this.root, data);
                } catch (e) {
                    console.error(e);
                }
                if (!conditionResult) {
                    //skip false condition properties
                    continue;
                }
            }

            if (
                data[key] === undefined ||
                data[key] === "" ||
                data[key] === null
            ) {
                var error = this.createError(
                    ErrorCodes.OBJECT_REQUIRED,
                    { key: key },
                    "",
                    "/required/" + i,
                    null,
                    data,
                    schema
                );
                if (this.handleError(error)) {
                    return error;
                }
            }
        }
    }
    return null;
};

ValidatorContext.prototype.validateObjectProperties = function validateObjectProperties(
    data,
    schema,
    dataPointerPath,
    schemaPointerPath,
) {
    var error;
    for (var key in data) {
        var keyPointerPath =
            dataPointerPath +
            "/" +
            key.replace(/~/g, "~0").replace(/\//g, "~1");
        const keySchemaPointerPath=schemaPointerPath+'/properties/'+key;
        var foundMatch = false;
        if (
            schema.properties !== undefined &&
            schema.properties[key] !== undefined
        ) {
            foundMatch = true;
            if (
                (error = this.validateAll(
                    data[key],
                    schema.properties[key],
                    [key],
                    ["properties", key],
                    keyPointerPath,
                    keySchemaPointerPath
                ))
            ) {
                return error;
            }
        }
        if (schema.patternProperties !== undefined) {
            for (var patternKey in schema.patternProperties) {
                var regexp = new RegExp(patternKey);
                if (regexp.test(key)) {
                    foundMatch = true;
                    if (
                        (error = this.validateAll(
                            data[key],
                            schema.patternProperties[patternKey],
                            [key],
                            ["patternProperties", patternKey],
                            keyPointerPath,
                            keySchemaPointerPath
                        ))
                    ) {
                        return error;
                    }
                }
            }
        }
        if (!foundMatch) {
            if (schema.additionalProperties !== undefined) {
                if (this.trackUnknownProperties) {
                    this.knownPropertyPaths[keyPointerPath] = true;
                    delete this.unknownPropertyPaths[keyPointerPath];
                }
                if (typeof schema.additionalProperties === "boolean") {
                    if (!schema.additionalProperties) {
                        error = this.createError(
                            ErrorCodes.OBJECT_ADDITIONAL_PROPERTIES,
                            { key: key },
                            "",
                            "/additionalProperties",
                            null,
                            data,
                            schema
                        ).prefixWith(key, null);
                        if (this.handleError(error)) {
                            return error;
                        }
                    }
                } else {
                    if (
                        (error = this.validateAll(
                            data[key],
                            schema.additionalProperties,
                            [key],
                            ["additionalProperties"],
                            keyPointerPath,
                            keySchemaPointerPath
                        ))
                    ) {
                        return error;
                    }
                }
            } else if (
                this.trackUnknownProperties &&
                !this.knownPropertyPaths[keyPointerPath]
            ) {
                this.unknownPropertyPaths[keyPointerPath] = true;
            }
        } else if (this.trackUnknownProperties) {
            this.knownPropertyPaths[keyPointerPath] = true;
            delete this.unknownPropertyPaths[keyPointerPath];
        }
    }
    return null;
};

ValidatorContext.prototype.validateObjectDependencies = function validateObjectDependencies(
    data,
    schema,
    dataPointerPath
) {
    var error;
    if (schema.dependencies !== undefined) {
        for (var depKey in schema.dependencies) {
            if (data[depKey] !== undefined) {
                var dep = schema.dependencies[depKey];
                if (typeof dep === "string") {
                    if (data[dep] === undefined) {
                        error = this.createError(
                            ErrorCodes.OBJECT_DEPENDENCY_KEY,
                            { key: depKey, missing: dep },
                            "",
                            "",
                            null,
                            data,
                            schema
                        )
                            .prefixWith(null, depKey)
                            .prefixWith(null, "dependencies");
                        if (this.handleError(error)) {
                            return error;
                        }
                    }
                } else if (Array.isArray(dep)) {
                    for (var i = 0; i < dep.length; i++) {
                        var requiredKey = dep[i];
                        if (data[requiredKey] === undefined) {
                            error = this.createError(
                                ErrorCodes.OBJECT_DEPENDENCY_KEY,
                                { key: depKey, missing: requiredKey },
                                "",
                                "/" + i,
                                null,
                                data,
                                schema
                            )
                                .prefixWith(null, depKey)
                                .prefixWith(null, "dependencies");
                            if (this.handleError(error)) {
                                return error;
                            }
                        }
                    }
                } else {
                    if (
                        (error = this.validateAll(
                            data,
                            dep,
                            [],
                            ["dependencies", depKey],
                            dataPointerPath
                        ))
                    ) {
                        return error;
                    }
                }
            }
        }
    }
    return null;
};
