/*if-(оператор если), else-(еще) &&-(оператор и )знак сравнения, 
length-(ограничение параметра) колл-во знаков, !=(проверка равенства)*/


//переменные
		let money,
				nameShop,
				time,
				price;
//обьявление функции

		function start() {
			money = prompt("Ваш бюджет?", ''); //значение переменных
			//операция сравнения ||-или
			while (isNaN(money) || money === "" || money === null) {
					money = prompt("Ваш бюджет?", '');
			}

				nameShop = prompt("Название Вашего магазина?", '').toUpperCase();//с заглавной буквы toUpperCase();
				time  = 21;
		}
		/*start();*/ //вызов функции

	let mainList = {
		budget: money,
		shopName: nameShop,
		shopGoods: [],
		shopItems: [],
		employers: {},
		open: false,
		discount: false,		
			//продажа товара
				chooseGoods: function chooseGoods() {
						for (let i = 0; i < 5; i++) {
							let a = prompt ("Какой тип товаров будем продавать?", '');
							
									if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a !=+ '' && a.length < 50 ) {
										mainList.shopGoods[i] = a;																	
									} else { 
										i = i -1;
										 alert('Введите товар!');
									}	
								}
				},
				// время работы
				workTime: function workTime(time) {

					if (time < 0) {
						console.log('Такого не может быть');
					} else if(time > 8 && time < 20) {
							console.log('Время работать!');
							mainList.open = true;
							} else if(time < 24) {
								console.log('Магазин не работает');
								} else {
									console.log('В сутках только 24 часа!');
								}
				},
				//буджет на 1 день
					dayBudget: function dayBudget() {
						alert('Ваш бюджет на 1 день' + mainList.budget / 30);
					},
					//скидка
					discount: function discount() {
						if (mainList.discount === true) {
							price = (price/100)*80;
						}
				},
					// сотрудники
					 employers: function employers() {
							for (let i = 0; i < 4; i++) {
								let name = prompt ("Введите имя сотрудника", '');
								mainList.employers[i] = name;
							
							}
				},
				//выбираем товар
				chooseShopItems: function chooseShopItems() {
						for (let i = 0; i < 1; i++){
							let items = prompt('Перечислите через запятую товары', '');

							if ((typeof(items)) === 'string'  &&  (typeof(items)) !== null && items !== '') {

										 	mainList.shopItems = items.split(', ');
											mainList.shopItems.push(prompt('Подождите, еще ', '')); //push-добавление в мвссив
											mainList.shopItems.sort(); //сортировка массива по порядку
											mainList.shopItems.shift();

													mainList.shopItems.forEach(function(item) {
													  document.writeln('<h2>' + 'У нас вы можете купить: ' + item + '</h2>');
													});
									} else { 
										i = i -1;
										 alert('Введите товар!');
									}	
								}
				}
	};

	console.log(mainList);
		for(let key in mainList) {
		console.log("- " + key + ";");
 }
	/*chooseGoods();*/
	/*workTime(19);*/
		/*discount();*/
	/*	employers();*/