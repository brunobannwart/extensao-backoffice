/* tslint:disable:object-literal-sort-keys */
const ptBr = {
  APPLICATION: {
    CURRENCY: 'BRL',
    ERRORS: {
      GENERIC: 'Parece que algo não saiu bem. Tente novamente mais tarde.',
      INVALID_KEY: 'Key do i18n inválida ou inexistente.',
      INSTANCE: {
        REFRESH_TOKEN: 'Token expirado. Faça Login novamente!',
        LOGIN: 'Faça Login novamente!',
      },
    },
    LANG: 'pt-BR',
  },
  COMPONENTS: {
    ADVANCED_FILTER: {
      FILTER: 'Filtrar',
      CLEAN: 'limpar',
    },
    SEARCH_BAR: {
      SEARCH: {
        LABEL: 'o que deseja procurar?',
      },
      STATUS: {
        LABEL: 'STATUS',
      },
      FILTERS: {
        LABEL: 'FILTROS',
      },
    },
    DATA_TABLE_ACTIONS: {
      ADD: {
        LABEL: 'Adicionar',
      },
      EDIT: {
        LABEL: 'Editar',
      },
      VIEW: {
        LABEL: 'Visualizar',
      },
      DELETE: {
        LABEL: 'Deletar',
      },
      PRINT: {
        LABEL: 'Imprimir',
      },
      OPEN: {
        LABEL: 'Abrir',
      },
      HISTORY: {
        LABEL: 'Histórico',
      },
    },
    PANEL_CONTENT_TOP_BAR: {
      PAGES: {
        DASHBOARD: {
          TITLE: 'Dashboard',
          LOGOUT: 'Sair',
        },
      },
    },
  },
  PAGES: {
    AUTH: {
      LOGIN: {
        URL: '/',
        PAGE_TITLE: 'Entrar',
        MESSAGES: {
          LOGOUT: 'Você saiu do sistema.',
          WELCOME: 'Bem vindo(a) novamente.',
          INVALID: 'Email e/ou senha incorretos.',
        },
        FORM: {
          TITLE: 'ENTRAR',
          MESSAGE:
            'Ut sit amet ultricies turpis, sed molestie eros. Praesent magna neque, elementum non semper vitae, vestibulum vitae mi.',
          EMAIL: {
            LABEL: 'E-mail',
            PLACEHOLDER: 'Seu e-mail válido',
          },
          PASSWORD: {
            LABEL: 'Senha',
            PLACEHOLDER: 'Seu senha segura',
          },
          BUTTON: {
            TEXT: 'Entrar',
          },
          BOTTOM_MESSAGE: {
            TEXT: 'Esqueceu sua senha?',
            TEXT_LINK: 'Clique aqui',
          },
        },
      },
      PASSWORD_RECOVERY: {
        URL: '/recuperar-senha',
        PAGE_TITLE: 'Recuperar senha',
        MESSAGES: {
          WELCOME: 'Bem vindo(a) novamente.',
          LOGOUT: 'Você saiu do sistema.',
          EMAIL: 'Verifique seu email',
          RECOVERY_SUCCESS: 'Senha alterada com sucesso',
        },
        FORM: {
          TITLE: 'RECUPERAR SENHA',
          MESSAGE:
            'Iremos enviar os próximos passos no e-mail abaixo para prosseguir com a recuperação de sua senha',
          EMAIL: {
            LABEL: 'E-mail',
            PLACEHOLDER: 'Seu e-mail válido',
          },
          TOKEN: {
            LABEL: 'Código de recuperação',
          },
          PASSWORD: {
            LABEL: 'Sua nova senha',
          },
          CHANGE_PASSWORD: {
            LABEL: 'Alterar senha',
          },
          BUTTON: {
            TEXT: 'Enviar e-mail',
          },
          BOTTOM_MESSAGE: {
            TEXT: 'Para voltar para o login,',
            TEXT_LINK: 'Clique aqui',
          },
        },
      },
    },
    PANEL: {
      DASHBOARD: {
        TITLE: 'DASHBOARD',

        DETAILS: {
          WELCOME: 'Seja Bem Vindo ',
          TITLE: 'Informações gerais',
          PAGE_DESCRIPTION: 'Visualize alguns dos principais indicadores',
        },
      },

      ADMIN: {
        ROUTE: {
          NAME: 'ADMINISTRADORES',
          REPORT: 'RELATÓRIO',
          REGISTER: 'REGISTRO',
          DETAILS: '/usuarios/administradores/detalhes/',
        },
        TITLE: 'ADMINISTRADORES',
        REPORT: {
          TITLE: 'Administradores',
          PAGE_TITLE: 'Administradores',
          PAGE_DESCRIPTION: 'Listagem de administradores',
          PAGE_TITLE_DETAILS: 'Detalhes',

          ADVANCED_FILTER: {
            NAME: 'Nome',
            EMAIL: 'E-mail',
          },

          TABLE: {
            NAME: {
              FIELD: 'name',
              HEADER: 'Nome'
            },
            EMAIL: {
              FIELD: 'email',
              HEADER: 'E-mail',
            },
            CREATED: {
              FIELD: 'createdAt',
              HEADER: 'Data de cadastro'
            },
            ACTIONS: {
              FIELD: 'actions',
              HEADER: 'Ações'
            }
          },
        },

        DETAILS: {
          UNDEFINED: 'Não definido',
          TITLE_ADD: 'Adicionar administrador',
          TITLE_EDIT: 'Editar administrador',
          DESCRIPTION_ADD: 'Preencha os campos abaixo para adicionar um administrador',
          DESCRIPTION_EDIT: 'Preencha os campos abaixo para editar um administrador',
          SUCCESS_ADD_MESSAGE: 'Administrador criado com sucesso!',
          SUCCESS_EDIT_MESSAGE: 'Administrador editado com sucesso!',
          SUCCESS_REMOVE_MESSAGE: 'Administrador removido com sucesso!',
          FORM: {
            ERROR: {
              PASSWORD: 'Verifique se as senhas são iguais e tente novamente!',
              PASSWORD_EMPTY: 'Preencha o campo senha!',
              NAME: 'Preencha o nome!',
              PHONE: 'Preencha um número de telefone!',
              EMAIL: 'Preencha o e-mail!',
            },
            TITLE: 'Detalhes do administrador',
            NAME: {
              LABEL: 'Nome completo',
            },
            EMAIL: {
              LABEL: 'E-mail válido',
            },
            DDI: {
              LABEL: 'DDI'
            },
            PHONE: {
              LABEL: 'Telefone celular válido',
            },
            PASSWORD: {
              LABEL: 'Senha segura',
            },
            PASSWORD_CONFIRMATION: {
              LABEL: 'Digite novamente a senha',
            },
            CHANGE_PASSWORD: {
              LABEL: 'Desejo alterar a senha',
            },
            BACK: {
              LABEL: 'VOLTAR',
            },
            SUBMIT: {
              LABEL: 'Salvar'
            }
          },
        },
      },

      NOT_FOUND: {
        TITLE: 'Erro 404',
        PAGE_DESCRIPTION:
          'Parece que não encontramos a página solicitada.\nVerifique a url digitada e tente novamente.',
      },
    },
  },

  SHARED: {
    CURRENCY_SYMBOL: 'R$',
    SELECT_SOMETHING: 'Selecione...',
    ADD_NEW: 'Adicionar',
    IMPORT_NEW: 'Importar CSV',
    SAVE: 'Salvar',
    ADD_ID: 'registro',
    CANCEL: 'Cancelar',
    DELETE: 'Deletar',
    DAY: 'Dia',
    MONTHS: {
      JANUARY: 'Jan',
      FEBRUARY: 'Fev',
      MARCH: 'Mar',
      APRIL: 'Abr',
      MAY: 'Mai',
      JUNE: 'Jun',
      JULY: 'Jul',
      AUGUST: 'Ago',
      SEPTEMBER: 'Set',
      OCTOBER: 'Out',
      NOVEMBER: 'Nov',
      DECEMBER: 'Dez',
    },
    DAYS_WEEK: {
      SUNDAY: 'D',
      MONDAY: 'S',
      TUESDAY: 'T',
      WEDNESDAY: 'Q',
      THURSDAY: 'Q',
      FRIDAY: 'S',
      SATURDAY: 'S',
    },
    DELETE_ACTION: {
      TITLE: 'Deseja realmente excluir esse item?',
      CONTENT: 'Esta ação é irreversível',
    },
    DATE_FORMAT: 'dd/MM/yyyy',
    DATETIME_FORMAT: 'dd/MM/yyyy hh:mm',
    SEND: 'Enviado',
    PENDING: 'Pendente',
    SCHEDULED: 'Agendado',
    CANCELED: 'Cancelado',
    PROFILE_TYPE: {
      ADMIN: 'Administrador',
      APP: 'Aplicativo',
    },
  },
};

export default ptBr;
