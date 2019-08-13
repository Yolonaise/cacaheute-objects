import { Person } from "./cacaheute.person"

export type CacaheuteGame = {
    name: string;
    status: string;
    persons: Person[];
    admin: Person;
}