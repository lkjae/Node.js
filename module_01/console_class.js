const fs = require('fs') //file system
const {Console} = require('console');
const { stderr } = require('process');

//파일 쓰기가 가능하도록 스트림 생성
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({stdout: output, stderr: errorOutput});
const count = 5;
logger.log('count: %d', count);  // stdout.log 파일에 count:5 기록
logger.error('count: ' + count);   // stderr.log 파일에 count:5 기록
