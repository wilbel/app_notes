export interface ProyectosI {
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
    title: string | null;
    description: string | null;
    presupuesto: string | null;
    state: string | null;
}