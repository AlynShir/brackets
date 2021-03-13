function findCloseBr(openBr, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] == openBr) {
            return bracketsConfig[i][1];
        }
    }
    return '';
}


module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        // 1.проверить закрытие скобки
        if (stack.length > 0 && str[i] == stack[stack.length - 1]) {
            stack.pop();
            continue;
        }
        // 2.проверить открытие скобки
        let closeBr = findCloseBr(str[i], bracketsConfig);
        if (closeBr != '') {
            stack.push(closeBr);
            continue;
        }
        // 3.иначе ошибка
        return false;
    }
    //если stack пустой то успех иначе ошибка
    return stack.length == 0;
}