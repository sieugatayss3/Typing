import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
})
export class TypingComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChildren('letter')
  letters: any;

  @ViewChild('input', { static: false })
  input!: ElementRef;

  arrayText: any[] | undefined;
  cursorIndex: number = 0;
  cursor: any;
  lettersArray: any[] = [];
  keyValue: any;

  ngOnInit(): void {
    let text = window.localStorage.getItem('text');
    if (text != null) {
      this.handleTextData(text);
    }
  }

  ngAfterViewInit(): void {
    this.lettersArray = this.letters._results;
    this.setCursor(this.cursorIndex);
  }

  setCursor(index: number) {
    if(index > 0 && this.cursor) {
      console.log(this.cursor);
      
      this.cursor.nativeElement.classList.remove('is-active');
    }

    this.cursor = this.lettersArray[index];
    this.cursor.nativeElement.classList.add('is-active');
  }

  handleTextData(text: string) {
    let temp = text
      .trim()
      .split(/\n/)
      .filter((text) => text != '')
      .join('\n');

    this.arrayText = temp.split(' ');
    this.arrayText = this.arrayText.map((word) => word.split(''));
    this.arrayText.forEach((word) => {
      word.push(' ');
    });
  }

  checkLineLetter(letter: string) {
    if (/\n/.test(letter)) {
      return false;
    }
    return true;
  }

  onKeyUp(event: KeyboardEvent) {
    let keyPress = event.key;
    if (keyPress === 'Shift' || keyPress === 'CapsLock') return;
    let letter = this.cursor.nativeElement;
    let value = letter.getAttribute('data-value');
    let isEnter = /\n/.test(value);
    
    if (keyPress === value || (isEnter && keyPress === 'Enter')) {
      this.cursor.nativeElement.classList.add('success');
      this.cursorIndex++;
      this.setCursor(this.cursorIndex);
    } else {
      this.cursor.nativeElement.classList.add('error');
      this.cursorIndex++;
      this.setCursor(this.cursorIndex);
    }
  }

  onBlur(event: any) {
    this.input.nativeElement.focus();
  }
}
