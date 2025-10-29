export const staticConfigYaml=`
server:
  port: 3021
  session-store: memory-saved
db:
  motor: postgresql
  port: 5432
  host: localhost
  database: canastas_db
  schema: ccc
login:
  schema: ipcba
  table: usuarios
  userFieldName: usu_usu
  passFieldName: usu_clave
  rolFieldName: usu_rol
  infoFieldList: [usu_usu, usu_rol, candownloadbackup]
  activeClausule: usu_activo
  unloggedLandPage: false
  double-dragon: true
  plus:
    allowHttpLogin: true
    fileStore: true
    loginForm:
      formTitle: entrada
      formImg: unlogged/tables-lock.png
client-setup:
  menu: true
  lang: es
  user-scalable: no
install:
  dump:
    db:
      owner: puntapie_inicial_owner
    scripts:
      pre-adapt:
      - ../node_modules/pg-triggers/lib/table-changes.sql
      post-adapt:
      - ../node_modules/pg-triggers/lib/function-changes-trg.sql
      - ../node_modules/pg-triggers/lib/enance.sql
logo:
  path: client/img
`;