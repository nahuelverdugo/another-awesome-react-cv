import { combineReducers } from 'redux'
import locale, * as fromLocale from './locale'

export default combineReducers({locale});

// locale
export const getLocale = state => fromLocale.getLocale(state.locale);