import { Component, Injectable } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
    en: {
        weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    zh: {
        //weekdays: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
        weekdays: ['Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.', 'Sun.'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    }
};

// Define a service holding the language. You probably already have one if your app is i18ned.
@Injectable()
export class I18n {
    language = 'zh';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n{
    constructor(private _i18n: I18n) {
        super();
    }

    getWeekdayName(weekday:number):string {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];

    }

    getMonthName(month:number):string {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    }
}
