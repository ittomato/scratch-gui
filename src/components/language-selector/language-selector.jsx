import PropTypes from 'prop-types';
import React from 'react';

import locales from 'scratch-l10n';
import styles from './language-selector.css';

// supported languages to exclude from the menu, but allow as a URL option
const ignore = [];

const LanguageSelector = ({componentRef, currentLocale, label, onChange}) => (
    <select
        aria-label={label}
        className={styles.languageSelect}
        ref={componentRef}
        value={currentLocale}
        onChange={onChange}
    >
        {
            Object.keys(locales)
                .filter(l => !ignore.includes(l))
                .map(locale => (
                    <option
                        key={locale}
                        value={locale}
                    >
                        {locales[locale].name}
                    </option>
                ))
        }
    </select>
);

LanguageSelector.propTypes = {
    componentRef: PropTypes.func,
    currentLocale: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
};

export default LanguageSelector;
