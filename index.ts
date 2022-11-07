// Import stylesheets
import './index.scss';

// Write TypeScript code!
export class SevenSegmentDisplay {
  numbers = {};
  Asegment = document.getElementsByClassName('display__segment A');
  Bsegment = document.getElementsByClassName('display__segment B');
  Csegment = document.getElementsByClassName('display__segment C');
  Dsegment = document.getElementsByClassName('display__segment D');
  Esegment = document.getElementsByClassName('display__segment E');
  Fsegment = document.getElementsByClassName('display__segment F');
  Gsegment = document.getElementsByClassName('display__segment G');
  regexValidator = '[0-9]';

  constructor() {
    let button = document.getElementById('btn');
    button.addEventListener('click', () => this.save());
  }

  save(): void {
    const textContent = document.getElementById('number') as HTMLInputElement;
    const textValue = textContent.value;
    if(textContent.value.match(this.regexValidator)){
      if (textValue === '1') {
        this.Bsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
      } else if (textValue === '2') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
        this.Esegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
      } else if (textValue === '3') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
      } else if (textValue === '4') {
        this.Fsegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
      } else if (textValue === '5') {
        this.Asegment[0].classList.add('red');
        this.Fsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
      } else if (textValue === '6') {
        this.Asegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Fsegment[0].classList.add('red');
        this.Esegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
      } else if (textValue === '7') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
      } else if (textValue === '8') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
        this.Esegment[0].classList.add('red');
        this.Fsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
      } else if (textValue === '9') {
        this.Asegment[0].classList.add('red');
        this.Bsegment[0].classList.add('red');
        this.Csegment[0].classList.add('red');
        this.Dsegment[0].classList.add('red');
        this.Fsegment[0].classList.add('red');
        this.Gsegment[0].classList.add('red');
      }
    } else {
      const error = document.getElementsByClassName('none-active-error');
      error[0].classList.add('active-error');
      error[0].classList.remove('none-active-error');
      console.log(error)
    }
    setTimeout(() => {
      location.reload();
    }, 1000)
  }
}

const example = new SevenSegmentDisplay();
