express.Route 클래스를 사용하면 라우트 처리를 하나의 파일에서 하는 것이 아니라 여러 개의 파일로 분리해서 각각의 용도(기능)에 맞게 구현하여 사용할 수 있다.

routes파일에 만들어 놓은 2개의 라우터 모듈을 app.js에서 사용하여 기능별로 관리할 수 있다.

라우트 모듈을 분리하면 각각의 서버 개발자가 기능별로 분리된 라우트 파일을 각자 관리하면 되기 때문에 업무를 명확하게 구분할 수 있다.

또한, 개발을 완료한 후 운영과 유지보수 측면에서도 이렇게 기능별로 라우트 모듈이 분리되어 있는 것이 훨씬 관리하기 쉽다.
