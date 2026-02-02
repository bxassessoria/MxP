# Guia de Deploy no SiteGround (Blog Editável)

Este guia explica como colocar seu site no ar com o sistema de blog editável funcionando.

## 1. Preparar os Arquivos
O projeto já contém os scripts PHP necessários na pasta `public/api`. Quando você fizer o build do site, tudo será empacotado corretamente.

## 2. Configurar no SiteGround
1. Acesse o **Site Tools** do seu domínio no SiteGround.
2. Vá em **Site** > **File Manager**.
3. Navegue até a pasta `public_html`.

## 3. Subir os Arquivos
1. Faça o build do projeto localmente (ou baixe do GitHub/Vercel se preferir).
   - Se for rodar build: `npm run build` -> O conteúdo da pasta `dist` é o que você deve subir.
2. Copie **todo o conteúdo** da pasta `dist` para dentro da `public_html` no SiteGround.

## 4. Permissões de Escrita (Importante!)
Para que o blog funcione (salvar posts e imagens), o PHP precisa de permissão para escrever em alguns arquivos.
No File Manager do SiteGround:
1. Localize a pasta `api`.
2. Dentro dela, clique com botão direito no arquivo `posts.json` (se não existir, crie um arquivo vazio com `[]` dentro).
3. Selecione **Change Permissions** e garanta que está com permissão de escrita (geralmente 644 ou 666 já funciona, se der erro tente 755 ou 777 temporariamente).
4. Crie uma pasta chamada `uploads` dentro de `api`.
5. Dê permissão de escrita (755 ou 777) para essa pasta `uploads`.

## 5. Acessar o Admin
- Acesse `seu-site.com/admin`
- Login padrão (configurado em `api/login.php`):
  - Usuário: `admin`
  - Senha: `password` (Recomendamos alterar isso editando o arquivo `api/login.php` antes de subir).

## Solução de Problemas
- **Erro 404 ao recarregar página:** Como é um site React (SPA), você precisa configurar o SiteGround para redirecionar todas as requisições para `index.html`.
  - Crie um arquivo `.htaccess` na raiz (`public_html`) com este conteúdo:
    ```apache
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </IfModule>
    ```
- **Erro ao salvar post:** Verifique as permissões da pasta `api` e do arquivo `posts.json`.

---
**Observação:** Este sistema usa armazenamento em arquivo JSON. É simples e eficiente para blogs corporativos, mas faça backups periódicos do arquivo `api/posts.json` e da pasta `api/uploads`.
