let url = {
  privateSeaVoice: '/privateSeaVoice',

}
let host = ''


for (const key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key];

  }
}
export default url;
