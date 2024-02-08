export interface ActividadBarrialI {
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
    place: string | null;
    cupos: string | null;
    cost: string | null;
    date: string | null;
}