/*
 * Задача b3: Написать функцию нахождения максимального числа при произвольном числе аргументов.
 * Необходимо написать функцию, используя методы Math.max и function.apply.
 * Напишите тесты.
 */
//здесь мы собираем в массив все переданные аргументы с помощью "...". И передаем этот массив "apply". "Apply" работает с массивом аргументов
export function maxWithRest(...args: number[]): number {
	return Math.max.apply(null, args);
}
// еще можно решить эту задачу с помощью arguments

/*
export function maxWithRest(): number {
	return Math.max.apply(null, arguments);
} 
*/

/*
	Примеры:
	max(4, 5, 3, 1, 3, 555, 3, 5, 6) // 555
*/
