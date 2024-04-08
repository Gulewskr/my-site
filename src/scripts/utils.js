import moment from 'moment';
import 'moment/locale/pl';
import { useTranslation } from 'react-i18next';

/**
 * @type { (input: string) => string }
 * @description get all uppercase characters and numbers from input to create a shortcut string
 * if input does not contain characters or numbers or shortcut has less than 3 chars
 * then return 5 first characters
 */
export const createShourtcut = inputString => {
    const matches = inputString.match(/[A-Z0-9]/g);
    if (matches) {
        const res = matches.join('');
        if (res.length > 3) return res;
    }
    return inputString.substring(0, 5);
};

export const getPrefixedTranslation = prefix => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation('translation', {
        keyPrefix: prefix,
    });
    return t;
};

export const getCurrentLanguage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { i18n } = useTranslation();
    return i18n.language;
};

export const dateFormat = (date, format) => {
    const lang = getCurrentLanguage();
    return moment(date).locale(lang).format(format);
};

export const isMobile = () => window.innerWidth <= 768;
