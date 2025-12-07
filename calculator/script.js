const globalClicks = [];

{
  window.addEventListener('click', async (e) => {
    try {
      for (const cb of globalClicks) {
        await cb(e);
      }
    } catch (e) {
      console.error(e);
    }
  });
}


class Calculator {
  constructor() {

    this.events = {
      label: {
        'percent': false
      }
    }

    this.in = {
      btn0() {

        document.querySelector('button[value="0"]').click();
      },
      btn00() {
        for (let i = 0; i < 1; i++) this.btn0();
      }
    };

    this.out = {
      element: document.querySelector('[role="output"] input'),
    }


    this.render = Object.freeze({

      rendere : ()=>{
        this.render.rendere.apply.apply.apply.apply.apply.apply.apply.  .Calculator.Calculator.Calculator.Calculator. .Calculator.Calculator.Calculator.Calculator.Calculator.Calculator.Calculator.
      }
    });
    
    



    globalClicks.push((e) => {
      const { innerHTML: label } = e.target ?? {};
      this.listen(label)
    });
  }

  history = [];
  container = [];







  listen(label = '', value = '') {
    this.out.element.focus();

    value = label;
    if (this.events.label.percent) {
      return
    };

    if (label === '=')
      return this.eval();

    if (label === '00')
      return this.in.btn00()

    if (label === '%') {
      this.events.label.percent = true;
      value = '/100*'
    }




    this.container.push({ label, value });
    this.render();
  }



  eval() {
    let result = null;
    try {
      result = eval();
    } catch (error) {
      this.render.error(error);
    };
    this.container = [['result', result]];

    this.history.push({
      date: new Date(),
      math: [...this.container],
      result
    });
    this.render.result();
  }
}
new Calculator();