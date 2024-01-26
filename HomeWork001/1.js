"use strict";

/*
###Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
*/

const musics = [
  { title: "Slipknot", artist: "Slipknot", year: "1999" },
  { title: "Iowa", artist: "Slipknot", year: "2001" },
  { title: "Vol. 3: The Subliminal Verses", artist: "Slipknot", year: "2004" },
]

const musicCollection = {
  musics,
  *[Symbol.iterator] () {
    for (let i = 0; i < this.musics.length; i++) {
      yield `${this.musics[i].title} - ${this.musics[i].artist}(${this.musics[i].year})`;
    }
  }
}

for (const music of musicCollection) {
  console.log(music);
}