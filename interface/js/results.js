const queryString = new URLSearchParams(window.location.search);
const resultId = queryString.get('id');

if (!window.localStorage.getItem('token')) {
  window.location.href = '/login.html';
}

const bail = () => {
  alert('Nenhum resultado encontrado');
  window.location = '/';
};

if (window.localStorage.getItem('token') && !resultId) bail();

fetch(
  `https://7nmk762twc.execute-api.us-east-1.amazonaws.com/api/results/${resultId}`,
  {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },
  }
)
  .then((r) => {
    if (!r.ok) bail();
    return r.json();
  })
  .then((result) => {
    document.getElementById('student-name').innerText = result.name;
    document.getElementById('correct').innerText = result.totalCorrectAnswers;
  })
  .catch((e) => {
    console.error(e);
    bail();
  });
