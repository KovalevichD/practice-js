/*
 * Задача b8: mapLimit
 * Есть массив url, есть функция fetch, которая возвращает промис
 * Есть ограничение по количеству параллельно запущеных request'ов
 * Нужно отправлять запросы ПАРАЛЕЛЛЬНО пачками, как только выполнились все N (переменная limit) запросов
 * отправлять следующие N запросов
 * Например, есть 12 url, отправляются 5, как только 5 запросов выполняются отправляем еще 5, затем 2
 * Когда все запросы обработаны, функция возвращает массив с резульататами.
 * Напишите тесты.
 */

/*
	Примеры:
	const urls = ['http://test1.ru',
		'http://test2.ru',
		'http://test3.ru',
		'http://test4.ru',
		'http://test5.ru',
		'http://test6.ru',
		'http://test7.ru',
		'http://test8.ru',
		'http://test9.ru'
	];
	const limit = 5; // количество одновременно запущенных запросов
	mapLimit(urls, limit);
*/
