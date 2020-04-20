const http = require("http"); // Node core module로 별도의 install 없이 사용 가능

const PORT = 5000;
const ip = "localhost";

const server = http.createServer((request, response) => {
  const headers = defaultCorsHeader;
  // 로그 확인
  console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );

  if (request.method === "GET") {
    // 주의: method를 대문자로 쓸 것
    response.writeHead(200, headers);
    response.end("hello mini-server");
  }

  if (request.method === "POST") {
    // body-parser없이 request.body를 확인하면 undefined
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        body = JSON.parse(body);
        // url로 라우팅
        if (request.url === "/add") {
          // HTTP 상태 코드와 응답 헤더를 설정
          response.writeHead(201, defaultCorsHeader);
          response.end(JSON.stringify(body.a + body.b));
        } else if (request.url === "/subtract") {
          response.writeHead(201, defaultCorsHeader);
          response.end(JSON.stringify(body.a - body.b));
        } else if (request.url === "/multiply") {
          response.writeHead(201, defaultCorsHeader);
          response.end(JSON.stringify(body.a * body.b));
        } else if (request.url === "/divide") {
          response.writeHead(201, defaultCorsHeader);
          response.end(JSON.stringify(body.a / body.b));
        } else {
          // 정의된 url 외의 다른 url로 POST 요청 - 에러처리
          response.writeHead(404, defaultCorsHeader);
          response.end();
        }
      });
  }

  if (request.method === "OPTIONS") {
    // CORS에 의해서 어떤 요청이든 사전요청(OPTIONS)을 보낸다.
    // 모든 origin을 허락하기 때문에 OPTIONS 요청은 언제나 200으로 응답한다.
    response.writeHead(200, defaultCorsHeader);
    response.end();
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
};
