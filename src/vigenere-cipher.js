const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
		this.direct = direct;
		this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		this.regexp = /[A-Za-z]/;
	}
	createIdArr (arr) {
		let reslut = [];
		this.arr = arr;
		for(let i = 0; i < this.arr.length; i++){
			this.arr[i].match(this.regexp) === null ? reslut.push(this.arr[i]) : reslut.push(this.alphabet.indexOf(this.arr[i]));
		}
		return reslut;
	}
	cipheringMachine (strWord, strCipher, encryptFn) {
		if (strWord === undefined || strCipher === undefined) throw new Error('Error');
		let ciphersArr = [];
		this.strWord = strWord;
		this.strCipher = strCipher;
		let g = 0;
		let f = 0;
		while(f < this.strWord.length){
			if (this.strCipher[g] === undefined) {
				g = 0;			
			}
			if (this.strWord[f].match(this.regexp) === null) {
				ciphersArr.push(this.strWord[f].toUpperCase());
				g--;
			}else{
				ciphersArr.push(this.strCipher[g].toUpperCase());
			}
			f++;
			g++;
		}

		let wordArr = [];
		for(let i = 0; i < this.strWord.length; i++){
			wordArr.push(this.strWord[i].toUpperCase());
		}

		let wordsIdArr = this.createIdArr (wordArr);
		let ciphersIdArr = this.createIdArr (ciphersArr);

		let newIdStr = [];
		this.encryptFn = encryptFn;
		for(let i = 0; i < wordsIdArr.length; i++){
			if (ciphersArr[i].match(this.regexp) === null){
				newIdStr.push(wordsIdArr[i])
			}else{
				encryptFn === true ? newIdStr.push(wordsIdArr[i] + ciphersIdArr[i]) : newIdStr.push(wordsIdArr[i] - ciphersIdArr[i]);
			}
		}

		let res = [];
		for(let i = 0; i < newIdStr.length; i++){
			if(encryptFn === true){
				if(newIdStr[i] > 25 ) newIdStr[i] = newIdStr[i] - this.alphabet.length;
			}else{
				if(newIdStr[i] < 0 ) newIdStr[i] = newIdStr[i] + this.alphabet.length;
			}
			typeof newIdStr[i] === 'string' ? res.push(newIdStr[i]) : res.push(this.alphabet[newIdStr[i]]);
		}
		return res;
	}
	encrypt(word, cipher) {
		let encryptFn = true;
		let res = this.cipheringMachine(word, cipher, encryptFn);
		if (this.direct === false) return res.reverse().join('');
		return res.join('');
	}    

	decrypt(word, cipher) {
		let encryptFn = false;
		let res = this.cipheringMachine(word, cipher, encryptFn);
		if (this.direct === false) return res.reverse().join('');
		return res.join('');
	}
}

module.exports = VigenereCipheringMachine;
