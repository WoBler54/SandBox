// Background
// My TV remote control has arrow buttons and an OK button.

// I can use these to move a "cursor" on a logical screen keyboard to type "words"...

// The screen "keyboard" layout looks like this

// a	b	c	d	e	1	2	3
// f	g	h	i	j	4	5	6
// k	l	m	n	o	7	8	9
// p	q	r	s	t	.	@	0
// u	v	w	x	y	z	_	/
// Kata task
// How many button presses on my remote are required to type a given word?


// Notes
// The cursor always starts on the letter a (top left)
// Remember to also press OK to "accept" each character.
// Take a direct route from one character to the next
// The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
// A "word" (for the purpose of this Kata) is any sequence of characters available on my virtual "keyboard"
// Example
// word = codewars

// c => a-b-c-OK = 3
// o => c-d-e-j-o-OK = 5
// d => o-j-e-d-OK = 4
// e => d-e-OK = 2
// w => e-j-o-t-y-x-w-OK = 7
// a => w-r-m-h-c-b-a-OK = 7
// r => a-f-k-p-q-r-OK = 6
// s => r-s-OK = 2
// Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36



var tvRemote = function(word) {
   
  let row = 'abcde123';
  let row2 = 'fghij456';
  let row3 = 'klmno789';
  let row4 = 'pqrst.@0';
  let row5 = 'uvwxyz_/';
  let remout = [];
  remout.push(row.split(''),row2.split(''),row3.split(''),row4.split(''),row5.split(''));
  var coordinates = [];


  for(let char of word){

    for(let i = 0; i < remout.length; i++){
    for(let j = 0; j < remout[i].length; j++){
       if(char == remout[i][j]){
          coordinates.push([i,j]);
          break;
       }
    }
  }
 //https://www.codewars.com/kata/5a5032f4fd56cb958e00007a/train/javascript
  var moveCount = 0;
  var currentPosition = [5,5];
 }
}
