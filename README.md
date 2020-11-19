# Superagro app

A aplicação consiste em uma aplicação mobile que ajuda um dono de uma granja gerenciar a mesma.
Um dos objetivos da aplicação também consiste em assegurar que o desenvolvedor responsável possui conhecimentos e habilidades para o bom desenvolvimento de uma aplicação mobile com React Native.<br />

## Importante
A presente aplicação necessita de fazer consumo de uma api que deverá ser executada localmente também. [Clique aqui](https://github.com/DavidFerreiraM1/superagro-back-end) para navegar até o repositório da mesma.

## Nota de versões:
* Node 14.15
* React 16.13.1
* React Native 0.63.3

## Começando
Devido a falta de recursos, não foi possível trabalhar em uma versão para IOS.
Para executar o projeto é necessário ter um ambiente react native configurado localmente, seja pra executar em um emulador ou no próprio dispositivo. [Clieque aqui](https://react-native.rocketseat.dev/) para mais detalhes de como configurar um ambiente react antive!<br />
Tendo o ambiente configurado, crie um arquivo env.ts na raiz do projeto e cole dentro do aquivo o conteúdo que está em env.template. <br />
Criado o arquivo env.ts, na varável ```LOCALHOST```, coloque o ip local da sua máquina. Isto fará que o app consiga se comunicar com a aplicação backend;
Após fazer o clone ou download da aplicação, na raiz do projeto execute os comandos a seguir:

```
yarn - Recuperar dependências do projeto
yarn react-native run-android -  Em um terminal inicia o build do projeto
yarn start - Em outro terminal para abrir um server de desenvolvimento
```

## Sobre o App

O aplicativo possibilita o dono de uma granja gerenciar a mesma. A aplicação possui funcionalidade básicas como cadastro de um animal com a seleção de sua categoria, atualizar informações, listagem com filtro e exclusão. A aplicação guarda os dados vindos da api localmente através do RealmDB para que possam ser visualizados mesmo se o usuário estiver offline, porém o mesmo fica impossibilidato de criar, alterar ou excluir um item.
O processo de login é feito apenas localmente e uma vez feito login, se o mesmo não fizer o logout, ao fechar o app o mesmo voltarar direto para a tela de home quando abrir o app novamente.

## Considerações

Infelizmente, devido ao pouco tempo disponível para produzir e outros problemas de força maior, não foi possível dedicar um tempo para fazer testes automatizados.<br />
Devido a falta de recursos, não foi possível trabalhar em uma versão para IOS.

## Autor

* **David Ferreira**
