export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // nova funcionalidade
        'fix',      // correção de bug
        'docs',     // documentação
        'style',    // formatação, ponto e vírgula, etc
        'refactor', // refatoração de código
        'test',     // adição de testes
        'chore',    // mudanças em ferramentas, configurações
        'perf',     // melhoria de performance
        'ci',       // mudanças no CI/CD
        'build',    // mudanças no sistema de build
        'revert',   // reverter commits anteriores
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 200],
  },
};