# Next Pizza

> ⚠️ Проект находится в процессе разработки.

Веб-приложение для заказа пиццы, созданное на базе Next.js, TypeScript и Tailwind CSS.

## Описание
Next Pizza — это современное приложение для выбора и заказа пиццы с фильтрами по ингредиентам, категориям, поиском и сортировкой. Используются серверные компоненты Next.js, Prisma для работы с базой данных и кастомные UI-компоненты.

## Технологии
- Next.js
- TypeScript
- Tailwind CSS
- Prisma ORM
- React

## Установка
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/ArtemRomanenk0/next_pizza.git
   ```
2. Перейдите в папку проекта:
   ```bash
   cd next-pizza/next-pizza
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```
4. Настройте переменные окружения (если требуется).
5. Проведите миграции и заполните базу данных:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

## Запуск
Для запуска в режиме разработки выполните:
```bash
npm run dev
```
Приложение будет доступно по адресу http://localhost:3000

## Структура проекта
- `app/` — страницы и API-роуты
- `components/` — UI и общие компоненты
- `services/` — взаимодействие с API
- `store/` — состояние приложения
- `prisma/` — схема и сиды базы данных

## Контакты
Автор: [ArtemRomanenk0](https://github.com/ArtemRomanenk0)
