	let arr = [];

	let arrMount = parseInt(prompt('Cколько массивов включить во внутрь?', ''));

//запрет на закрытие и отмену и пустую строку
		while(arrMount == null || arrMount == '' || isNaN(arrMount)){
			arrMount = parseInt(prompt('Cколько массивов включить во внутрь?', ''));
		}
//Заполняет их несколькими произвольными числами (не больше 5) и выводит сумму элементов этого массива
			for (let i = 0; i < arrMount; i++){
				let tempArr = [];

				for (let k = 0; k < 5; k++){
					tempArr.push(Math.round(Math.random() * 10));
				}
				arr.push(tempArr);
			}

	let sum = 0;

		for (let i = 0; i < arrMount; i++){
			for (let k = 0; k < arr[i].length; k++){
				sum += arr[i][k];
			}
		}

document.write( '<h2>' + 'Массив' +'</h2>' + '<h3>' + arr + '</h3>' + '<br>');
document.write( 'Cумма элементов массива' + ': ' + '<b>' + sum + '</b>' );