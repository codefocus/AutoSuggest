(function(window) {
    var LIBRARY_NAME    = 'AutoSuggest',
        _private        = {},
        methods         = {},
        options         = {
            'option1': 'value1'
        },
        init;

    methods.set = function(value) {
        // Set the property & value
        _private[topic] = value;
        return this;
    };

    // A simple get method
    methods.get = function(callback) {
        var response = null;

        // Return the value of topic (property) in a callback
        if (!!callback && typeof callback === 'function') {
            if (_private.hasOwnProperty(topic)) {
                response = _private[topic];
            }
            callback.call(this, response);
        }
        return this;
    };

    // Init method setting the topic and returning the methods.
    init = function(_options) {
    //  Merge options, if provided
        if (_options) {
            var attribute;
            for (attribute in _options) {
                options[attribute] = _options[attribute];
            }
        }
        
        console.log(options);
        return methods;
    };

    // Last-in-the-line exposure to the window, if it exists
    window[LIBRARY_NAME] = init;

    // This line either passes the `window` as an argument or
    // an empty Object-literal if `window` is not defined.
}(('undefined' !== typeof window) ? window : {}));



