# Sanity Studio

_Acesse o **[Sanity Studio do site da Pixel](https://ejpixel.sanity.studio/desk)**._

Para constituir o _backend_ do site da Pixel, foi utilizado o Sanity Studio, que é um CMS (Content Management System) que permite a criação de conteúdo de forma fácil e rápida, sem a necessidade de conhecimento técnico para realizar alterações no código fonte do _frontend_.

### Como funciona

O Sanity é baseado em um modelo de conteúdo definido por schemas, que é uma forma de definir a estrutura do conteúdo que será gerenciado pelo CMS.

Um schema no Sanity define o modelo de dados que será usado para armazenar o conteúdo. Ele consiste em campos que definem o tipo de dados que podem ser inseridos em cada campo, bem como as regras que regem como esses dados são validados e formatados. Isso permite que os desenvolvedores criem um modelo de conteúdo personalizado para cada tipo de conteúdo gerenciado pelo CMS. Por exemplo, um schema de postagem de blog pode ter campos para o título, corpo, autor, data de publicação e categoria. Cada campo pode ter um tipo de dados diferente, como texto, data, referência a outro documento ou uma lista de valores.

### Como utilizar

Uma vez criados os schemas necessários para o projeto, é possível acessar o Sanity Studio através do [link](https://ejpixel.sanity.studio/desk). Para acessar o CMS, é necessário ter credenciais de acesso, que podem ser solicitadas à conta administradora do Sanity Studio. Após o login, é possível acessar o conteúdo de cada schema e realizar alterações, adições e exclusões de conteúdo.

Para acessar os dados do Sanity CMS a partir de um aplicativo _frontend_, é necessário realizar uma chamada de API utilizando uma biblioteca HTTP, como o Fetch, para recuperar os dados do backend. Essa chamada pode ser realizada de forma síncrona ou assíncrona, dependendo da necessidade do aplicativo.

O Sanity CMS fornece a capacidade de realizar consultas personalizadas usando GROQ. GROQ é uma linguagem de consulta projetada especificamente para trabalhar com esquemas de conteúdo no Sanity CMS. Com GROQ, os desenvolvedores podem realizar consultas sofisticadas que permitem a recuperação de dados de maneira altamente específica e personalizada.

As consultas GROQ são escritas em uma sintaxe JSON-like, e permitem que os desenvolvedores especifiquem quais campos e valores de um esquema de conteúdo são necessários para uma consulta específica. As consultas GROQ podem ser altamente sofisticadas, incluindo consultas de filtro, agregação, ordenação e outras funcionalidades avançadas. Por exemplo, para recuperar todos os documentos de um tipo de conteúdo específico, é possível utilizar a seguinte consulta:

```groq
*[_type == "post"]
```

### Como são refletidas as alterações de conteúdo

Toda vez que um conteúdo é alterado no Sanity Studio, será feita uma chamada de build para o local que hospeda o _frontend_ do site. Ou seja, toda vez que um conteúdo é alterado, o site é atualizado automaticamente, pois ele será reconstruído com as novas informações que foram adicionadas e serão resgatadas do Sanity CMS atravéz das chamadas de API realizadas pelo _frontend_ durante a build.

É importante notar que dependendo do tipo de alteração e do tamanho do website, a build pode demorar alguns minutos para ser concluída. Portanto, é importante ter em mente que as alterações realizadas no Sanity Studio podem demorar alguns minutos para serem refletidas no site.

### Como enviar alterações para o Sanity Studio

Quando uma alteração for feita no Sanity Studio (seja a mudança de um schema, criação de um novo schema, etc.), é necessário realizar o _redeploy_ do Sanity Studio. Para isso, basta executar os seguintes comandos no terminal:

1. Abra o terminal na pasta raiz do projeto.
2. Execute `cd sanity-backend` para acessar a pasta do diretório referente ao Sanity Studio.
3. Execute `npx sanity deploy` ou `sanity deploy` (caso você tenha o Sanity CLI instalado globalmente) para realizar o _redeploy_ do Sanity Studio.

# Referências

- [Sanity CMS](https://www.sanity.io)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)
- [GROQ](https://www.sanity.io/docs/groq)

# Autore(s)

- [André Rocco](https://www.linkedin.com/in/andre---rocco/) - Estruturação e configuração base do funcionamento do backend
