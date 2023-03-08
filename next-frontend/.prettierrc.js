// Define as configurações do Prettier para a padronização da formação do código

module.exports = {
    arrowParens: 'always',
    bracketSpacing: true, // Uso de espaços entre chaves
    endOfLine: 'crlf',
    htmlWhitespaceSensitivity: 'css', // Uso de quebra de linha em HTML
    insertPragma: false, // Inserir @format no início do arquivo
    jsxSingleQuote: false, // Uso de aspas simples em JSX
    proseWrap: 'always',
    quoteProps: 'as-needed',
    requirePragma: false, // Uso de @format no início do arquivo
    semi: true, // Uso do ponto e vírgula
    singleQuote: true, // Uso de aspas simples
    printWidth: 120, // Tamanho máximo de uma linha
    tabWidth: 4, // Tamanho de tabulação
    trailingComma: 'all', // Uso da vírgula no final de objetos e arrays
    useTabs: false, // Uso de tabs ao invés de espaços
    vueIndentScriptAndStyle: false,
    embeddedLanguageFormatting: 'auto',
};