// Validates inputs based on passed validation rules
function validate(rules, inputs) {
	var messages = {};
	for (const [key, value] of Object.entries(rules)) {
  		switch (value) {
  			case 'number':
  				if (isNaN(inputs[key]) === true) {
  					messages[key] = inputs[key] + ' is not a number';
  				}
  				break;
  			case 'string':
  				if ((typeof inputs[key] === 'string') === false) {
  					messages[key] = inputs[key] + ' is not a string';
  				}
  				break;
  			case 'bool':
  				if ((typeof inputs[key] === 'boolean') === false) {
  					messages[key] = inputs[key] + ' is not a boolean';
  				}
  				break;
        case 'email':
  				var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    			if (pattern.test(inputs[key]) === false) {
  					messages[key] = inputs[key] + ' is not a valid email address';
  				}
  				break;
  		}
	}
	messages.valid = isEmpty(messages);
	return messages;
}

// Checks if the validator has any error messages
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

module.exports = {
    validate
}