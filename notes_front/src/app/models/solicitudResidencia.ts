export interface SolicitudResidenciaI {
    id: string | null;
    users: {
        id: string | null;
        firstName: string | null;
        lastName: string | null;
        birthdate: string | null;
        age: string | null;
        identification_card: string | null;
        status: string | null;
        address: string | null;
        image: string | null;
        description: string | null;
        email: string | null;
        username: string | null;
        password: string | null;
        rol: string | "USER";
    } ;


    nombres: string | null;
    identification_card: string | null;
    num_organization: string | null;
    name_organization: string | null;
    id_junta: string | null;



    juntaBarrial: {
        id: string | null;
        num_organization: string | null;
        name_organization: string | null;
        date_creation: string | null;
        name_president: string | null;
        name_secretary: string | null;
        name_treasurer: string | null;
        name_vocals: string | null;
        others: string | null;
    } ;
    certified_number: string | null;
    commune: string | null;
    sector: string | null;
    detail: string | null;
    streets: string | null;
    date: string | null;
    state: string | null;
}


