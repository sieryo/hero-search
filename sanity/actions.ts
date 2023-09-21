import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery, searchQuery } from "./utils";

interface GetHeroesParams {
    hero: string | undefined
}

export const getHeroes = async (params : GetHeroesParams) => {
    const {hero} = params;

    try {
        const heroes = await readClient.fetch(
            groq`${buildQuery({
                 type: 'hero',
                 hero,
            })}{
                _id,
                name,
                durability,
                dayaSerang,
                efekCrowdControl,
                tingkatKesulitan,
                "image" : image.asset->url,
                role
            }`
        )
        return heroes
    } catch (error) {
        console.log(error)
    }
}

export const getHero = async (params: GetHeroesParams) => {
    let {hero} = params;

    if (!hero) {
        hero = 'martis'
    }
    try {
        const dataHero = await readClient.fetch(
            groq`${searchQuery({
                 type: 'hero',
                 hero,
            })}{
                _id,
                name,
                durability,
                dayaSerang,
                efekCrowdControl,
                description,
                tingkatKesulitan,
                "image" : image.asset->url,
                role
            }`
        )
        return dataHero
    } catch (error) {
        console.log(error)
    }
}