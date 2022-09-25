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

    static getStringWithoutSpace(string) {
        let acc = string.split(' ').join('')
        return acc
    }

    static isUpperCaseNameAndSurname(string) {
        let acc = FormValidation.getStringWithoutSpace(string)
        return acc[0] === acc[0].toUpperCase() ? false : true
    }

    static isEpmty(string, isNameSurname = false) {
        let acc;
        if(isNameSurname){
            acc = FormValidation.getStringWithoutSpace(string)
            return acc.length === 0 ? true : false
        }
        return string.length === 0 ? true : false
    }

    static isRightFirstPartOfSite(string) {
        const reg = /https:\/\//
        return reg.test(string.split().slice(0, 9).join(''))
    }
    static isSite(string) {
        let acc = FormValidation.getStringWithoutSpace(string.slice(8))
        return acc
    }
    static isValidPhonNumber(string) {
        if(+string.substring(0, 1) || string.substring(0, 1) === '0') {
            if(+string.substring(2, 6) || string.substring(2, 6) === '0000') {
                if(+string.substring(7, 9) || string.substring(7, 9) === '00') {
                    if(+string.substring(10) || string.substring(10) === '00') {
                        return false
                    }
                }
            }
        }
        return true
    }

}