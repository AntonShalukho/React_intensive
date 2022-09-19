export class FormValidation {
    static messages = {
        empty: 'Поле пустое. Заполните пожалуйста',
        UpperName: 'Первый символ Имени - это всегда большая буква.',
        UpperSurame: 'Пурвый символ Фамилии - это всегда большая буква.',
        url: 'Wrong Url',
        limit: 'Превышен лимит символов в поле',
        wrongNumber: 'Wrong phone number',
        wrongTypePhone: 'Wrong phone number type'
    }

    static getNameSurnameWithoutSpace(string) {
        let acc = string.split(' ').join('')
        return acc
    }

    static isUpperCaseNameAndSurname(string) {
        return string[0] === string[0].toUpperCase() ? false : true
    }

    static isEpmty(string) {
        return string.length === 0 ? true : false
    }

    static isSite(string) {
        const reg = /https:\/\//
        return reg.test(string.split().slice(0, 9).join(''))
    }
    static isValidPhonNumber(string) {
        console.log('0', +string.substring(0, 1) || string === '0')
        if(+string.substring(0, 1) || string.substring(0, 1) === '0') {
            if(+string.substring(2, 6)) {
                if(+string.substring(7, 9)) {
                    if(+string.substring(10)) {
                        return false
                    }
                }
            }
        }
        return true
    }

}