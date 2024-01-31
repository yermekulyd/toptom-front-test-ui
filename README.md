# vue3-uikit-storybook

# Техническое задание на позицию верстальщика

1. Необходимо зайти в figma и найти страницы `Color`, `Typography`, `Timeline` (`https://www.figma.com/file/tDmMcstFkRv6nJBc8PBWY5/UI-KIT-(Copy)?type=design&node-id=58%3A1857&mode=design&t=rdjEtyMu5A6nDGv9-1`)
2. В проекте установлены все необходимые инструменты для разработки (выполнить установку зависимостей)
3. Необходимо реализовать компонент `Timeline` с использованием адаптивной/кроссбраузерной верстки.
4. В обязательные задачи входит:
   > - Написание компонента Timeline в `storybook` с использованием `БЭМ`, `scss`, прокидыванием `props` и всех необходимых `ивентов`
   > - Написание `нескольких вариантов` для данного компонента
   > - Написание `тестов` для проверки работоспособности вашего компонента

Структуру и расположение кода вы выбираете сами. Всем удачи :)


Для того, чтобы начать разработку нужно:

1. Установить все зависимости командой: "yarn"
2. Запустить проект командой: "yarn dev", - и убедиться, что проект собрался и запустился корректно
3. Приступить к разработке компонентов
4. Написать тесты для проверки компонентов на vitest (примеры: https://codingpr.com/test-your-vue-3-app-with-vitest-and-vue-test-utils/)

В репозитории присутствует базовый компонент кнопки, который подключен к storybook и протестирован.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

