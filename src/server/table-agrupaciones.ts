"use strict"

import { TableDefinition } from "backend-plus";

export function agrupaciones():TableDefinition{
    return {
        editable: true,
        name: 'agrupaciones',
        fields: [
            {name:'agrupacion', typeName:'text', nullable:false},
            {name:'nombreagrupacion', typeName:'text', nullable:false},
            {name:'paravarioshogares', typeName:'boolean', defaultDbValue:'false'},
            {name:'calcular_junto_grupo', typeName:'text', nullable:false},
            {name:'valoriza', typeName:'boolean', defaultDbValue:'false'},
            {name:'tipo_agrupacion', typeName:'text'},
        ],
        constraints: [
            {consName:'texto invalido en nombreagrupacion de tabla agrupaciones', constraintType:'check', expr:`comun.cadena_valida(nombreagrupacion, 'castellano'::text)`}
        ],
        primaryKey: ['agrupacion'],
    }
}