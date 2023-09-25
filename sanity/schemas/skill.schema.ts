const schema = {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Id',
        type: 'number',
        validation: (Rule : any) => Rule.required(),
      },
      {
        name: 'heroName',
        title: 'Hero Name',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'hero' }] }],
      validation: (Rule : any) => Rule.required(),
      },
      {
        name: 'name',
        title: 'Skill Name',
        type: 'string',
        validation: (Rule : any) => Rule.required(),
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
          list: ['passive', 'skill 1', 'skill 2', 'skill 3', 'skill 4', 'ultimate']
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (Rule : any) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        validation: (Rule: any) => Rule.required(),
        options: {
          hotspot: true,
        },
      },
      // tambahkan field lain yang Anda butuhkan di sini
    ],
  };
  export default schema;
  