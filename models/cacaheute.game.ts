import { Person } from "./cacaheute.person"

export type CacaheuteGame = {
    rejoin_id?: string;
    name?: string;
    status?: string;
    persons?: Person[];
    admin?: Person;
    price?: number;
}