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

{hasFinished && ( //isso seria como um if, then. sem o else
                <button 
                disabled
                className={styles.countdownButton}
                >
                    
                   Ciclo encerrado
               </button>
            )}

#### Contexto
contexto eh uma forma de fazer um componente se comunicar com o outro
(contexto eh uma forma de ter acesso a uma mesma informacao em diversos lugares diferentes)
(outra boa forma de dizer, compartilhamento de estados, gerenciamento de estados, compartilhamento de estados)


quando vc passar uma propriedade q eh um objeto para uma interface, eh interessante q vc crie uma interface para esse objeto utilizando as propriedades dele, e passe essa segunda interface como o tipo da propriedade objeto de sua primeira interface.
Ex:
```tsx
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}


interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge
    levelUp: () => void;
    startNewChallenge: () => void;
}
```

### Principal parte da 3 aula, CONTEXTOS EM REACT

o react roda por tras algo chamado "react fast refresh" onde o codigo pode ser alterado sem ter perdido o estado atual da aplicacao

como o countdownProvider depende do ChallengesProvider 
(usa ele la dentro com o useContext, eh so ir la olhar) 
ele precisa ficar dentro
do challengesProvider, senao ele n vai funcionar
porem, ele n vai ser usado em varias telas, entao n precisamos botar ele
no _app, podemos chamar ele direto na tela em q ele vai ser chamado, no caso a Home (index)
e podemos botar ele por volta de onde ele eh necessitado, no caso botamos ele em volta da section

### Armazenamento de infos no navegador
local storage = deixa salvo mesmo se vc sair do navegador, porem so aceita chave e valor, n podendo guardar infos mais complexas

session storage = mesma coisa q local storage mas eh por session, ou seja, se vc sair do navegador tudo sera apagado

IndexDB = Banco de dados mais completo

cookies = podem armazenar infos mais complexas

#### Instalacoes
o js tem uma api nativa para cookie, mas usar essa biblioteca facilita o processo:
```
yarn add js-cookie
```
para fazer o deploy pela vercel dps vamos instalar o pacote dela, nesse caso eh recomendado o npm
```
npm install -g vercel
```
#### getServerSideProps
funcionalidade interessante do next q so funciona no "pages"
com o getServerSideProps podemos manipular os dados q sao passados do next para o frontEnd
tudo q eh feito dentro do getServerSideProps n roda no brownser, e sim dentro do server next (node)

no ts para podermos ter a tipagem do ctx devemos passar o tipo do getServerSideProps, e eh bem simples
eh so importar o GetServerSideProps (G maiusculo) do next e passar ele como o tipo:
```ts
export const getServerSideProps: GetServerSideProps = async (ctx) => {

}
```

ja q agora as infos de level e xp no geral estao sendo passadas para os cookies nos n precisamos mais q o ChallengesProvider fique por volta de todo o _app, pois n precisamos mais dele segurando todas as infos desse jeito, ja q os cookies ja estao fazendo isso para nos, entao vamos botar ele na Home

#### level up modal
o level up modal pode estar em qualquer lugar, desde q esteja dentro do challengesContext pois a funcao de levelup onde
iremos chamar o modal esta dentro do challengesContext. Ja q eh esse o caso todo o lugar q o challengesProvider estiver, o level up modal tem q estar tambem. Entao como o challengesProvider eh um componente react, podemos apenar importar o LevelUpModal para dentro do nosso componente ChallengesContext e botalo retornando abaixo de **children** e dentro de ChallengesProvider

### Deploy
serie de perguntas do deploy pela vercel CLI
```
? Set up and deploy “D:\Documentos\Projetos\moveit-next”? [Y/n] y
? Which scope do you want to deploy to? guilherme
? Link to existing project? [y/N] n
? What’s your project’s name? moveit
? In which directory is your code located? ./
Auto-detected Project Settings (Next.js):
- Build Command: `npm run build` or `next build`
- Output Directory: Next.js default
- Development Command: next dev --port $PORT    
? Want to override the settings? [y/N] n
```

se vc quiser fazer deploy dps eh so rodar o comando **vercel** de novo, porem ele ira fazer 
um deploy de teste em uma url provisoria para vc testar, se tudo estiver certo vc pode fazer o deploy final para producao
rodando o comando **vercel --prod**

## Levando a aplicacao para o proximo nivel
-  Fazer uma documentacao legal (fazer um gif ou video "acho q vou fazer video dessa vez") lista as tecnologias q foram utilizadas, ensina como roda a aplicacao na maquina de alguem q baixar o projeto, explica logistica, pra q serve etc
- Deixar responsivo
- adicionar funcionalidade de PWA (pesquisar Next PWA)
- criar um tema dark

### funcionalidades a mais para o proximo nivel
- fazer uma forma de logar com o github (pesquisar Oauth github ou Ouath github next) servless com nextjs na rocketSeat (posso pesquisar dps la no canal deles)
- fazer um ranking 
- compartilhar no twitter o seu level

### Minhas ideias para o proximo nivel
- uma ideia eh vc poder usar logado para poder entrar no ranking e deslogado se vc n quiser o ranking
- 
### Todolist
- [ ] 
#### Links interessantes:
https://stackoverflow.com/questions/51040669/next-js-use-of-app-js-and-document-js