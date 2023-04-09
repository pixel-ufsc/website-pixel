// import {defineType, defineField, defineArrayMember} from 'sanity'

const member = {
  name: 'member',
  type: 'document',
  title: 'Membros',
  fieldsets: [
    {
      name: 'role_information',
      title: 'Informações do cargo',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      type: 'string',
      title: 'Nome do cargo',
      validation: (Rule) => Rule.required(),
      fieldset: 'role_information',
    },
    {
      name: 'is_director',
      type: 'boolean',
      initialValue: false,
      title: 'Diretor(a)',
      description:
        'Marque se o membro possui cargo de diretor(a) (isso fará com que ele apareça na página inicial).',
      validation: (Rule) => Rule.required(),
      fieldset: 'role_information',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem',
      description:
        'Recomenda-se um tamanho de 500px x 500px e, idealmente, um tamanho de arquivo pequeno (até 1MB).',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
      role: 'role',
      media: 'image',
    },
    prepare(selection) {
      const {name, role, media} = selection
      return {
        title: name,
        subtitle: role,
        media,
      }
    },
  },
}

export default member
