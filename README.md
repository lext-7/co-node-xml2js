co-node-xml2js
===========

[node-xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) with co


Usage
=====
install from npm

```
npm install co-xml2js
```

```javascript
import xml2js from "xml2js";
import co from "co";

co(function *() {

    var xml = new xml2js.Builder().buildObject({
        xml: {
            div: "text"
        }
    });

    var json;

    // parse xml
    json = yield xml2js.parseString(xml);
    // or
    var parser = new xml2js.Parser(/*your options*/);
    json = yield parser.parseString(xml);

});

```
