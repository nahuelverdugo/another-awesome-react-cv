export const LOCALE_CHANGE = '@@locale/LOCALE_CHANGE';

export function localeChange (locale) {
  return (dispatch) => {
    dispatch({ type: LOCALE_CHANGE, locale });
  };
}
