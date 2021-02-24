yarn create next-app nomeDoProjeto

Interessante a parte do document sobre estilos q se repetem, no _app vc passa components q se repetem e no _document vc passa coisas como fontes para o head, q n se repetem, a estrutura do _document pode se copiada de outros projetos pois ela eh bem similar

nome.modules.css eh preciso para usar os modulos de css
com css modules vc pode definir styles q n vao interferir com outros, deixando os mais separados,
pois eles criaram de forma automatica um "id" de estilo unico ao inves de so jogar o nome da sua classe no html

usar o rem eh interessante pq ele muda de acordo com o tamanho da pagina mudando todos os tamanhos dos objetos, pois funciona com fontsize e cada 1rem = 16px;
Obs: Use px direto apenas em coisas q vao ter tamanho fixo n importando o tamanho da tela

o .classe > div pega so as divs q estiver na "primeira camada" sem pegar divs q estao dentro de outras tags q estao na tag com a classe

arquivos q estao dentro da pasta public podem ser referenciados diretamente, exemplo src="icons/level.svg" n importa onde vc esta usando esse src pq o caminho n precisa ser especificado de forma perfeita, so botar oq vc quer dentro do src ja vai dar certo

eh interessante, quando vc tem uma cor q se repete muito na sua aplicacao, usar no :root do css variaveis de cor (se quiser ver como faz eh so olhar no global.css dessa aplicacao)

uma parada interessante para vc poder pegar tags q estao no mesmo lugar e sao iguais em uma aplicacao eh usando o :first-child e :last-child pq ela pega a primeira tag especificada q aparece na classe q vc esta falando e a ultima (olhe o CompletedChallenges.module.css para ver como funciona)

transition pode ser usado para fazer um efeito legal quando vc bota o mouse por cima do botao e ele vai escurendo so q bem rapido ao inves de so mudar direto

o useEffect eh muito interessante pq o primeiro parametro eh oq vai ser executado, o segundo mantem um array onde toda vez q oq estiver no array tiver o valor alterado o q esta no primeiro parametro sera executado, como eh um array vc pode passar mais de um elemento para ele ficar "olhando" e caso qualquer um deles tenha mudado/ tenha seu valor alterado, o useEffect executa

#### Links interessantes:
https://stackoverflow.com/questions/51040669/next-js-use-of-app-js-and-document-js