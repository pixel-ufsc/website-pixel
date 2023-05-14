const project = {
  name: 'project',
  type: 'document',
  title: 'Projetos',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome do projeto',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'preview_image',
      type: 'image',
      title: 'Imagem de pré-visualização',
      description:
        'Essa é a imagem que será mostrada como capa do projeto. A proporção da imagem deve ser de 16:9 e, idealmente, deve-se utilizar um tamanho de arquivo pequeno (até 1MB).',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Categorias',
      description: 'Selecione as categorias do projeto.',
      of: [
        {
          type: 'string',
          title: 'Categoria',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}

export default project
