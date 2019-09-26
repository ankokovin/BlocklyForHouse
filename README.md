# BlocklyForHouse
[English](#blocklyforhouse-en)

Здесь будет описание...



## Просмотр: https://ankokovin.github.io/BlocklyForHouse/
Пока не по русски, ну и ладно

## Как разрабатывать:
### Версии
1. Создайте новую папку /version/{version number}
2. Скопируйте всё из прошлой версии (или какую надо)
3. И вперёд

### Создание блоков
1. https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
2. Импортируйте /version/{version number}/library.xml
3. Создайте блоки
4. Для каждой новой категории создайте папки
- /version/{version number}/blocks/{category}
- /version/{version number}/generators/python/{category}
5. Для каждой новой подкатетории создайте файлы
- /version/{version number}/blocks/{category}/{subcategory}.js с описанием блоков на JS (not JSON!)
- /version/{version number}/generators/python/{category}/{subcategory}.js с правилами генерации кода
6. Экспортируйте библиотеку блоков в /version/{version number}/library.xml
#### Для отображения блоков на странице 
7. Откройте /version/{version number}/index.html
8. Добавьте элементы <script>, указывающие на добавленные в (5) файлы
8. [Измените xml элемент с id="toolbox"](https://developers.google.com/blockly/guides/configure/web/toolbox). 


# BlocklyForHouse En

There will be a description some time in the future...

## View: https://ankokovin.github.io/BlocklyForHouse/
## How to develop
### Version
1. Create new folder /version/{version number}
2. Copy everything from last version
3. Enjoy

### Creating blocks
1. https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
2. import /version/{version number}/library.xml
3. add blocks
4. for each new category create folders
- /version/{version number}/blocks/{category}
- /version/{version number}/generators/python/{category}
5. for each new subcategory create files
- /version/{version number}/blocks/{category}/{subcategory}.js with block definition in JS (not JSON!)
- /version/{version number}/generators/python/{category}/{subcategory}.js with translation rules
6. export block library as /version/{version number}/library.xml
