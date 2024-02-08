export interface SolicitudVecinalI {
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
    };
    solicitantes: string | null;
    title: string | null;
    place: string | null;
    description: string | null;
    monto: string | null;
    state: string | null;
    date_solicitud: string | null;
    date_ejecucion: string | null;
}

