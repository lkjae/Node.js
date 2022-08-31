[Node.js]

설치
1. npm(Node Package Manager)받기
$> sudo apt install npm

2. node.js 설치
$> sudo apt install nodejs
(npm만 설치해도 nodejs가 설치됨)

3. node.js 업그레이드
$>sudo npm install -g n              : n 모듈 설치 
$>sudo n stable                      : 안정버전 node 설치
$>hash -r		 	    : 리눅스 명령어 위치 변경

old  : /usr/bin/node
new : /usr/local/bin/node


4. npm 업그레이드
$>sudo npm install -g npm
(에러안나면 성공)

현재 버전 확인
$>npm -v
$>node -v
 
5. node-snippets설치

6. js파일 생성
$>code hello.js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

7. node hello.js

8. http://localhost:3000



