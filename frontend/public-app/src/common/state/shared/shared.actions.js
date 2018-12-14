import i18n from '../../../../config/i18n';
import urlTitleDictionary from './url-title-dictionary.json';

export const LOADING_START = 'LOADING_START';
export const LOADING_DONE = 'LOADING_DONE';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const SET_TITLE = 'SET_TITLE';

export function StartLoaderAction () {
  return {
    type: LOADING_START
  };
}

export function StopLoaderAction () {
  return {
    type: LOADING_DONE
  };
}

export function SetTitleAction (pathLocation) {
  return {
    type: SET_TITLE,
    payload: urlTitleDictionary[pathLocation] || ''
  };
}

export function ChangeLanguageAction (language) {
  i18n.changeLanguage(language);
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  };
}
