## Synopsis
A simple module for nodejs. It exports a function that can search a property in an object. This function accepts custom values to be returned.

## Code Example

Instantiate a TableExport object

* require the module

        const searchInObject = require('<use the relative path for the index file>');

* basic usage

        const obj = {
            a: {
                b: {
                    c: 1
                }
            }
        };
        const successSearchObjectProperty = searchInObject(obj, 'a.b');
        //{c: 1}
        const successSearchCustomResult = searchInObject(obj, 'a.b', {
            thenReturn: 'found',
            elseReturn: 'nothing'
        });
        //'found'
        const failSearchObjectProperty = searchInObject(obj, 'a.b.c.d');
        //undefined
        const failSearchCustomResult = searchInObject(obj, 'a.b.c.d', {
            thenReturn: 'found',
            elseReturn: 'nothing'
        });
        //'nothing'

## License

[MIT](https://github.com/DanielFrag/search-object-property/blob/master/LICENSE)