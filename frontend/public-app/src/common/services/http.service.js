import fetch from 'isomorphic-fetch';

class HttpService {
  fetch (options) {
    const { url, method, body } = options;
    const headers = new Headers();

    if (options.contentType) {
      headers.append('Content-Type', options.contentType);
    }

    return fetch(API_HOST + url, {
      method,
      headers,
      credentials: 'same-origin',
      body
    }).then((res) => {
      if (res.ok) {
        return res.text().then((text) => {
          if (text && this.isValidJsonString(text)) {
            return JSON.parse(text);
          }
          return text;
        });
      }
      throw new Error(res.statusText);
    });
  }
  isValidJsonString (string) {
    /* eslint-disable */
    return /^[\],:{}\s]*$/.test(string.replace(/\\["\\\/bfnrtu]/g, '@')
      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
      .replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
    /* eslint-disable */
  }
}

export default new HttpService();
