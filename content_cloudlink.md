# CloudLink

**Subtítulo:** Solução híbrida para gestão de conteúdo digital mesclando vantagens do cloud computing aliado a infraestrutura on premises

## Descrição
O CloudLink é a solução híbrida para gestão de conteúdo digital da Media Portal.

Com esse sistema podemos aliar o melhor dos recursos oferecidos pela computação em nuvem, como, elasticidade, economia e segurança a um hardware de armazenamento local de alta performance, capaz de atender até 32 ilhas de edição simultaneamente.

- Trata-se de um storage dedicado para edição de vídeo, que opera integrado com a infraestrutura de nuvem.
- O storage está integrado a um NOC – Network Operation Center – permitindo um acompanhamento em tempo real para prevenção de problemas.
- A conexão com a nuvem vai integrá-lo com avançados recursos através do sistema MAM, tais como funcionalidades para arquivamento digital e análise de vídeo.

Todos os recursos e ganhos operacionais descritos no CloudFly são mantidos e a integração com o storage de edição em na sua infraestrutura local potencializa maiores ganhos operacionais.

## Orquestrador de fluxos e a integração com a nuvem
Os serviços de MAM ficam na nuvem e estão integrados com o storage in-house utilizado para edição de vídeos através do orquestrador de fluxos. O orquestrador de fluxos corresponde ao módulo de Media Processing Workflow.

Existem pastas pré-configuradas que estão associadas a diferentes fluxos de para processamento dos arquivos.

Todos os vídeos ingestados pela pasta de material editado tem uma representação em baixa resolução elaborada.

- **pasta para ingest de material bruto** – este fluxo é bastante simplificado, ele elabora uma baixa resolução, e não faz a análise de conteúdo nem a transcrição de voz para texto. O volume processado por este fluxo não é contabilizado na cota de ingest.
- **pasta para ingest de material editado** – este fluxo permite realizar o arquivamento definitivo dos vídeos, elabora a baixa resolução, e também faz a análise de conteúdo e a transcrição de voz para texto. O volume processado por este fluxo é contabilizado na cota de ingest. Através deste fluxo é que os arquivos são replicados na infraestrutura de nuvem.

São disponibilizados recursos para decupagem e catalogação, tanto para os vídeos ingestados pela pasta de material editado como para os vídeos ingestados pela pasta de material bruto.

Para o acervo de vídeos editados, são disponibilizados fluxos de publicação no Vimeo, no Youtube, no Facebook e na Sambatech.

O CloudLink disponibiliza um dicionário controlado, para apoiar o processo de catalogação e indexação. O dicionário é composto por identidades e por thesaurus.

Também são disponibilizados recursos para organizar coleções de vídeos: por exemplo vídeos de um campeonato, vídeos de um evento, vídeos de uma série, etc.
