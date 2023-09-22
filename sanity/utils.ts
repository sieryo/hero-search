interface BuildQueryParams {
    type: string;
    hero: string | undefined;
}

interface SearchQueryParams {
    type: string;
    hero: string | undefined;
}

export const buildQuery = (params: BuildQueryParams) => {
    const {type} = params

        
    const conditions = [`*[_type=="${type}"]`]

    return `${conditions[0]}`
}

export const searchQuery = (params: SearchQueryParams) => {
    const {type,hero} = params

    let conditions = [`*[_type=="${type}" && name match "*${hero}"]`]

    return `${conditions[0]}`
}