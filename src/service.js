export const transform = (object) => {
  const arr = [];
  // eslint-disable-next-line
  for (const p in object) {
    // eslint-disable-next-line
    if (object.hasOwnProperty(p) && !Array.isArray(object[p])) {
      arr.push(`${encodeURIComponent(p)}=${encodeURIComponent(object[p])}`);
    }

    if (Array.isArray(object[p])) {
      object[p].forEach((item, key) => {
        arr.push(`${encodeURIComponent(`${p}[${key}]`)}=${encodeURIComponent(item)}`);
      });
    }
  }
  return arr.join('&');
};

const post = (url, payload) => {
  return new Promise(resolve => {
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: transform(payload),
    }).then(raw => {
      raw.json().then(res => {
        resolve({
          data: res,
        });
      })
    });
  });
}

const get = (url) => {
  return new Promise(resolve => {
    fetch(url, {
      method: "GET"
    }).then(raw => {
      raw.json().then(res => {
        resolve({
          data: res,
        });
      })
    });
  });
}

export default {
  get,
  post,
}