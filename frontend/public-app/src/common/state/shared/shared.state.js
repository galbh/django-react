import urlTitleDictionary from './url-title-dictionary.json';

const sharedState = {
  loading: false,
  supportedLanguages: { en: 'en-US', he: 'He' },
  language: localStorage.i18nextLng || 'en-US',
  rtlLanguages: ['He'],
  isRtl () { return this.rtlLanguages.indexOf(this.language) > -1; },
  getTitle: key => sharedState.urlTitleDictionary[key],
  urlTitleDictionary
};

export default sharedState;
