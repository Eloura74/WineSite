export interface Article {
    id: number;
    nom: string;
    prix: number;
    image: string;
    description: string;
    categorie: string;
    region: string;
    cepage: string;
    annee: number;
}

export interface CartItem extends Article {
    quantity: number;
}

export interface CartTotals {
    ht: number;
    tva: number;
    ttc: number;
}
