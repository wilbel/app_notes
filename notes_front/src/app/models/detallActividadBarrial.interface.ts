export interface DetallActividadBarrialI {
    id: string | null;
   
    actividadBarrial: {
        id: string | null;
        title: string | null;
        description: string | null;
        place: string | null;
        cupos: string | null;
        cost: string | null;
        date: string | null;
    } ;
   
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
    date_inscription: string | null;
    detalle_inscription: string | null;
    
}

