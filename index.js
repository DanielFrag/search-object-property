/**
 * It can search a property in an object.
 * The propertyPath must contains the path to navigate until the target property.
 * The propertyPath must separate each property with the '.' character.
 * Exemple:
 * obj = {
 *  a: {
 *      b: {
 *          c: 1
 *      }
 *  }
 * };
 * propertyPath = 'a.b.c';
 * @param {object} obj
 * @param {string} propertyPath
 * @param {object} resultController
 */
function searchInObject (obj, propertyPath, resultController = {thenReturn: undefined, elseReturn: undefined}) {
    const keysToNavigate = propertyPath.split('.');
    let previousProperty = Object.assign({}, obj);
    const len = keysToNavigate.length;
    for (let i = 0; i < len && previousProperty; i++) {
        previousProperty = previousProperty[keysToNavigate[i]];
    }
    if (previousProperty) {
        if (resultController.thenReturn) {
            return resultController.thenReturn;
        }
        return previousProperty
    } else {
        if (resultController.elseReturn) {
            return resultController.elseReturn;
        }
        return undefined;
    }
}
module.exports = searchInObject;