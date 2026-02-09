INSTRUÇÕES DE INSTALAÇÃO - MEDIA PORTAL (SITEGROUND)
======================================================

Este pacote contém o site completo (Frontend React + Backend PHP simples para Blog).

PASSO A PASSO PARA DEPLOY:

1. ACESSE O SITEGROUND:
   - Vá para o Site Tools do seu domínio.
   - Abra o Gerenciador de Arquivos (File Manager).
   - Navegue até a pasta pública (geralmente `public_html`).

2. LIMPEZA (OPCIONAL):
   - Se já houver um site antigo, faça backup e remova os arquivos antigos, EXCETO a pasta `cgi-bin` ou arquivos ocultos como `.htaccess` se você tiver configurações personalizadas.

3. UPLOAD DOS ARQUIVOS:
   - Faça o upload de TODOS os arquivos e pastas contidos neste pacote (pasta `dist` gerada).
   - A estrutura deve ficar assim na raiz do seu site:
     /public_html
       /assets      (pasta)
       /api         (pasta - IMPORTANTE para o blog)
       /data        (pasta - ONDE FICAM OS POSTS)
       /uploads     (pasta - ONDE FICAM AS IMAGENS)
       index.html
       ...outros arquivos

4. PERMISSÕES (CRÍTICO PARA O BLOG FUNCIONAR):
   - No Gerenciador de Arquivos, clique com o botão direito na pasta `data` e selecione "Change Permissions" (Alterar Permissões).
   - Defina para **755** ou **777** (se 755 não funcionar para escrita). Certifique-se de que o PHP possa escrever nela.
   - Faça o mesmo para a pasta `uploads`.
   - Verifique se o arquivo `data/posts.json` também tem permissão de escrita.

5. TESTE:
   - Acesse seu site (ex: www.mediaportal.com.br).
   - Vá para /painel.
   - Tente criar um post. Se salvar, o backend está funcionando.
   - Se der erro ao salvar, verifique as permissões das pastas `data` e `uploads` novamente.

6. SEGURANÇA (RECOMENDADO):
   - O painel de admin (`/painel`) está aberto. Recomenda-se proteger essa rota com senha via `.htaccess` ou implementar autenticação real no futuro.

SUPORTE:
- O backend utiliza PHP simples e armazena dados em JSON. Não requer MySQL.
- Certifique-se de que seu servidor rode PHP 7.4 ou superior.
