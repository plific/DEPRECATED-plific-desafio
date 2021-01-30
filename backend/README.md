# SOBRE O ESLINT:

Você precisará instalar a **extensão** do **Eslint** no **VSCode.** É ela quem irá te auxiliar para que as configurações sejam entendidas dentro do código.

Uma outra configuração que precisa fazer para o **VSCode** formatar o código sempre que salvar algum arquivo, é adicionar uma opção chamada `codeActionsOnSave` nas configurações (ctrl + shift + P: Digite 'Preferences: Open Settings (JSON)'), assim como mostrado abaixo:

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

---

# SOBRE O PRETTIER:

Antes de começar a configuração é importante que você se certifique de remover a extensão Prettier - Code Formatter do seu VS Code, ela pode gerar incompatibilidades com as configurações que vamos fazer.
