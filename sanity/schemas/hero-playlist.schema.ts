const schema = {
    name: 'heroPlaylist',
    title: 'Hero Playlist',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule:any) => Rule.required()
        },
        {
            name: 'heroes',
            title: 'Heroes',
            type: 'array',
            of: [
                {type: 'reference', to: [{type: 'hero'}]}
            ]
        }
    ]
}

export default schema