"use strict";

/*
###Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
*/

class Library {
   #books;

   constructor(books) {
      if (!Array.isArray(books)) {
         throw Error("Список книг не массив");
      }
      if (arr => arr.filter((item, index) => arr.indexOf(item) !== index).length === 0) {
         this.#books = books;
      } else {
         throw Error("В списке книг содержаться дубликаты");
      }
   };

   allBooks () {
      return this.#books;
   };

   addBook (title) {
      if (this.hasBook(title)) {
         throw Error("Такая книга уже существует");
      }
      this.#books.push(title);
   };

   removeBook (title) {
      if (!this.hasBook(title)) {
         throw Error("Такая книга не существует");
      }
      const id = this.#books.findIndex(e => e === title);
      this.#books.splice(id, 1);
   };

   hasBook (title) {
      return this.#books.includes(title);
   }
}


// const lib = new Library(["Букварь", "Вторая", "Зеленая", "Зеленая"]);
// const lib = new Library("Букварь");
const lib = new Library(["Букварь", "Вторая", "Зеленая"]);
console.log(lib.allBooks());

// lib.addBook("Вторая");
lib.addBook("Еще одна");
console.log(lib.allBooks());

lib.removeBook("Еще одна");
// lib.removeBook("Какая то");
console.log(lib.allBooks());

console.log(lib.hasBook("Еще одна"));
console.log(lib.hasBook("Вторая"));