export interface TableDataResponse{
    count: number,
    entries: TableData[]
}

export interface TableData {
    id_persona:          number;
    nombre_persona:      string;
    apellido_paterno:    string;
    apellido_materno:    string;
    fecha_nacimiento:    Date;
    estatus_acomp:       string;
    nombre_usr:          string;
    id_tipo_persona:     number;
    nombre_tipo_persona: string;
}

export interface DetailedPerson {
    id_persona:           number;
    nombre_persona:       string;
    apellido_paterno:     string;
    apellido_materno:     string;
    foto_persona:         boolean;
    id_tipo_persona:      number;
    sexo:                 boolean;
    telefono:             string;
    fecha_nacimiento:     Date;
    id_estado_civil:      number;
    estatus_acomp:        string;
    id_SGM:               number;
    nivel_escolar:        string;
    ultimo_grado:         string;
    estudiando:           boolean;
    carrera:              string;
    id_empleo:            number;
    ocupacion:            string;
    seguro_empresa:       boolean;
    posicion_laboral:     string;
    salario_fijo_mensual: number;
    id_religion:          number;
    nivel_religion:       string;
    nombre_tipo_persona:  string;
    nombre_estado_civil:  string;
    nombre_empleo:        string;
    nombre_SGM:           string;
    nombre_religion:      string;
    nombre_usr:           string;
    id_usr:               number;
}


export interface DetailedInfant {
    id_persona:             number;
    nombre_persona:         string;
    apellido_paterno:       string;
    apellido_materno:       string;
    foto_persona:           boolean;
    nombre_tipo_persona:    string;
    sexo:                   boolean;
    curp:                   string;
    telefono:               string;
    fecha_nacimiento:       Date;
    enteradoPlan:           string;
    responsable:            string;
    estatus_acomp:          string;
    estado:                 string;
    municipio:              string;
    localidad:              string;
    colonia:                string;
    calle:                  string;
    num_ext:                number;
    num_int:                number;
    codigo_postal:          number;
    nombre_estado_civil:    string;
    casa:                   string;
    fam_confianza:          boolean;
    numHermanos:            number;
    registro_civil:         boolean;
    foto_acta:              boolean;
    hospital:               string;
    peso:                   number;
    estatura:               number;
    nombre_SGM:             string;
    foto_cartilla:          boolean;
    vacuna_BGC:             Date;
    vacuna_hepatitis:       Date;
    vacuna_auditiva:        boolean;
    vacuna_tamiz:           boolean;
    nombre_religion:        string;
    bautizado:              boolean;
    id_tipo_persona:        number;
    id_estado_civil_padres: number;
    id_SGM:                 number;
    id_religion:            number;
    nombre_usr:             string;
    id_usr:               number;
}
