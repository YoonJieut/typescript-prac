const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'your secret key', // 세션 ID를 서명하는 데 사용되는 비밀 키
  resave: false, // 세션을 강제로 다시 저장할지 여부를 설정
  saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 저장할지 여부를 설정
  cookie: { secure: false } // secure를 true로 설정하면 HTTPS를 사용하는 경우에만 쿠키를 전송합니다.
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome! View count will start on your next visit.');
  }
});

app.get('/subscribe', (req, res) => {
  req.session.isSubscribed = true; // 세션에 구독 상태 저장
  res.send('Subscribed successfully');
});

app.get('/unsubscribe', (req, res) => {
  req.session.isSubscribed = false; // 세션에 구독 상태 저장
  res.send('Unsubscribed successfully');
});

app.get('/status', (req, res) => {
  // 세션에서 구독 상태 가져오기
  const isSubscribed = req.session.isSubscribed;
  res.send(`Subscription status: ${isSubscribed ? 'Subscribed' : 'Not subscribed'}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});