const serverHead = 'http';
const serverHost = 'www.wayne-chu.com';
const serverPort = 80;
const apiVer = '7012/api/v1';

$(document).ready(async function() {
  await postMyIp();
  await getMyIp();
  await getMyIpCountPerMinutes();
});

function postMyIp() {
  axios
    .post(`${serverHead}://${serverHost}:${serverPort}/${apiVer}/ipRecord/`)
    .catch(e => alert(e));
}

function getMyIp() {
  axios
    .get(
      `${serverHead}://${serverHost}:${serverPort}/${apiVer}/ipRecord/userIp`,
    )
    .then(response => {
      if (response.status === 200) {
        const data = response.data;
        document.getElementById('loginIp').innerHTML = data.body.ip;
      }
    });
}

function getMyIpCountPerMinutes() {
  axios
    .get(`${serverHead}://${serverHost}:${serverPort}/${apiVer}/ipRecord/count`)
    .then(response => {
      if (response.status === 200) {
        const data = response.data;
        document.getElementById('count').innerHTML = data.body.count;
      }
    });
}
