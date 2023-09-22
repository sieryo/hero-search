 const schema = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      require,
      validation: (Rule : any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      require,
      validation: (Rule : any) => Rule.required()
    },
    {
      name: 'durability',
      title: 'Durability',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'dayaSerang',
      title: 'Daya Serang',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'efekCrowdControl',
      title: 'Efek Crowd Control',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'tingkatKesulitan',
      title: 'Tingkat Kesulitan',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      }
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ['tank','fighter','assassin','marksman','mage','support']
      }
    }

  ]
}
export default schema