# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve recveber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar o envio de e-mails no embiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (backgroundjob);

**RN**

- O link enviado por e-mail para resetar a senha deve expirar em duas horas;
- O usuário deve confirmar sua senha antes de alterá-la;


# Atualização de perfil

**RF**

- O usuário deve poder alterar seu nome, e-mail e senha;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- O Para atualizar sua senha, o usuário deve iunformar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a sua nova senha;

# Painel do prestrador

**RF**

- O prestador deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber um notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MOngoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um stats de lifa ou não-lida para que o prestador possa controlar;


# Agendamento de serviço

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário desponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador de serviço;
- O usuário deve poder realizar um novo agendamento com um prestador de serviço;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar exatamento uma hora;
- Os agendamentos devem estar disponíveis entre 8h as 18h (Primeiro as 8h, ultimo as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
