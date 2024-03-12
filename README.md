# Para devs interessados em Angula! 🅰️ 👾

https://www.udemy.com/course/angular-9-essencial/

##  O que é o angular ? 🅰️

É um framework da google usado para construir Spa
baseado em components.

Angular.js é a primeira versão do angular(versão antiga)

CLI - comand line interface


## --> Comandos 👩🏾‍🚀


INSTALAR

npm i -g @angular/cliD

## CRIAR PROJETO

ng new  minha-primeira-app


## --> Arvove de components 🌲

O componente App que seria o pai de todos chama os demais 
components dentro dele, tambem podemos usar um componente
filho que se comporta como componente pai e chama os demais
components dentro deles.


## --> Conceitos essencias do angular 🟩🟨🟥📖

Componente: Pedaço de codigo que pode ser reutilizado,pode ser
representado como um pedaço da tela, mas para nos codificadores
uma pasta com arquivos: html, css e typescript

Modulos: voce tem um modulo que dentro dele contem componentes
mas para cada modulo voce so pode guardar arquivos especificos.
Todos os components são referenciados pelo app

### Dentro do modulo nos temos:

-Declarations: components, diretivas, pipes (declarar components fazem parte do modulo)
-Exports: components, diretivas, pipes (visiveis para outros modulos)
-Imports: Module A, Module B, Module C (outros modulos que voce for usar)
-Providers: sercice A, sercice B, sercices C ()
-BootStrap: App components

### Instalando Material-Design

ng add @angular/material

Pode colocar tudo como Y, e escolha qual tema voce 
deseja.

### Gerar componente novo 

ng generate component components/template [Nome do componente] 

ou 

ng g c [Nome do componente] 



  



