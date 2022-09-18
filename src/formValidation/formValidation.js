export class FormValidation {
    static messages = {
        empty: 'Поле пустое. Заполните пожалуйста',
        UpperCase: 'Первый символ «Имя», «Фамилия» - это всегда большая буква.',
        url: 'Wrong Url',
        limit: 'Превышен лимит символов в поле'
    }

    static isUpperCaseNameAndSurname(string) {
        return string[0] === string[0].toUpperCase() ? false : true
    }

    static isEpmty(string) {
        return string === '' ? true : false
    }

    static isSite(string) {
        const reg = /https:\/\//
        return reg.test(string.split().slice(0, 9).join(''))
    }

}