class App {
  init() {
    document
      .querySelector("#add")
      .addEventListener("click", this.add.bind(this));
    document
      .querySelector("#subtract")
      .addEventListener("click", this.subtract.bind(this));
    document
      .querySelector("#multiply")
      .addEventListener("click", this.multiply.bind(this));
    document
      .querySelector("#divide")
      .addEventListener("click", this.divide.bind(this));
  }

  post(path, body) {
    fetch(`http://localhost:5000/${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "text/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.render(res);
      });
  }

  add() {
    const numbers = {
      a: Number(document.querySelector("#number-a").value),
      b: Number(document.querySelector("#number-b").value),
    };
    this.post("add", numbers);
  }

  subtract() {
    const numbers = {
      a: Number(document.querySelector("#number-a").value),
      b: Number(document.querySelector("#number-b").value),
    };
    this.post("subtract", numbers);
  }

  multiply() {
    const numbers = {
      a: Number(document.querySelector("#number-a").value),
      b: Number(document.querySelector("#number-b").value),
    };
    this.post("multiply", numbers);
  }

  divide() {
    const numbers = {
      a: Number(document.querySelector("#number-a").value),
      b: Number(document.querySelector("#number-b").value),
    };
    this.post("divide", numbers);
  }

  render(response) {
    const resultWrapper = document.querySelector("#response-wrapper");
    document.querySelector("#number-a").value = "";
    document.querySelector("#number-b").value = "";
    resultWrapper.innerHTML = response;
  }
}

const app = new App();
app.init();
