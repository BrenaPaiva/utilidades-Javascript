# Como funciona?
Modelo de ramificação que atribui funções específicas para os diferentes tipos de ramificações.

* Extremamente util, de forma organizada. Cada comando do git flow realiza uma série de comandos
do git, reduzindo o esforço de gerenciar branchs e, ainda, registra os lançamentos.

## Padrão branch no git Flow
1. Main/Master: é a ramificação principal, o programa que está no ar, sendo que a última atualização deve estar em produção.
2. hotfix: é uma correção rápida de erro que está em produção, feita a partir do histórico da main/master
3. develop: é onde contém todas as novas funcionalidades que ainda não foram publicadas e serão enviadas para a Master por meio de uma release(liberação/lançamento).
4. feature: é onde contém um novo recurso que será enviado para a develop
5. release: reúne todas as features prontas na develop e enviará a Main/Master

## Ver mais em:
https://coodesh.com/blog/candidates/veja-as-melhores-praticas-de-como-dominar-o-git/

