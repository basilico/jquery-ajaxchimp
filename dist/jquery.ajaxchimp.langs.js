(function ($) {
    'use strict';

    // ISO-693-1 Language codes: http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

    $.ajaxChimp.translations = {
        it: {
            success: {
              1: 'Per completare l\'iscrizione devi cliccare il link nella email che ti abbiamo appena inviato.',
              2: 'Grazie per esserti iscritto!'
            },
            submit: 'Registrazione in corso...',
            error: {
                1: 'Per favore inserisci un indirizzo email',
                2: 'L\'indirizzo email inserito non è valido',
                3: 'L\'indirizzo email inserito non è valido',
                4: 'L\'indirizzo email inserito non è valido',
                5: 'L\'indirizzo email inserito non è valido',
                6: 'L\'indirizzo email sembra finto o non valido: per favore inseriscine uno reale',
                7: 'Sono stati effettuati troppi tentativi di iscrizione per questa email. Per favore riprova tra 5 minuti.',
                8: '$1 è già iscritto alla lista $2'
            }
        },
        ru: {
            success: {
              1: 'Чтобы завершить процесс регистрации, нажмите на ссылку в электронном письме, которое мы только что отправили вам.',
              2: 'Спасибо вам за подписку на нашу рассылку!'
            },
            submit: 'Pегистрация в процессе...',
            error: {
                1: 'Пожалуйста, введите свой адрес электронной почты',
                2: 'Адрес электронной почты недействителен',
                3: 'Адрес электронной почты недействителен',
                4: 'Адрес электронной почты недействителен',
                5: 'Адрес электронной почты недействителен',
                6: 'Этот адрес электронной почты выглядит фальшивым или недействительным. Пожалуйста, введите действительный адрес электронной почты',
                7: 'Слишком много попыток подписки на этот адрес электронной почты. Пожалуйста, повторите попытку через 5 минут.',
                8: '$1 уже подписан на список $2'
            }
        }
    };
})(jQuery);
