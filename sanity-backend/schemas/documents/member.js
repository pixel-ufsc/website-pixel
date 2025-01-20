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
      name: 'isCurrentMember',
      type: 'boolean',
      title: 'Membro Atual',
      initialValue: true,
      description: 'Marque se o membro ainda faz parte do time.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'is_director',
      type: 'boolean',
      initialValue: false,
      title: 'Diretor(a) Atual',
      description:
        'Marque se o membro possui cargo de diretor(a) (isso fará com que ele apareça na página inicial).',
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
      isCurrentMember: 'isCurrentMember',
      media: 'image',
    },
    prepare(selection) {
      const {name, role, isCurrentMember, media} = selection
      return {
        title: name,
        subtitle: `${role} (${isCurrentMember ? 'Atual' : 'Ex-Membro'})`,
        media,
      }
    },
  },
}

export default member
