const project = {
  name: 'project',
  type: 'document',
  title: 'Projetos',
  groups: [
    {
      name: 'general_information',
      title: 'Informações gerais',
    },
    {
      name: 'images',
      title: 'Imagens',
    },
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome do projeto',
      validation: (Rule) => Rule.required(),
      group: 'general_information',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      group: 'general_information',
    },
    {
      name: 'url',
      type: 'url',
      description:
        'URL do site que foi desenvolvido. Caso não o site não esteja mais ativo, deixe o campo em branco.',
      title: 'URL do site',
      group: 'general_information',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Descrição do projeto',
      validation: (Rule) => Rule.required(),
      group: 'general_information',
    },
    {
      name: 'preview_image',
      type: 'image',
      title: 'Imagem de pré-visualização',
      description:
        'Essa é a imagem que será mostrada como capa do projeto. A proporção da imagem deve ser de 16:9 e, idealmente, deve-se utilizar um tamanho de arquivo pequeno (até 1MB).',
      validation: (Rule) => Rule.required(),
      group: 'images',
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
      group: 'general_information',
    },
  ],
}

export default project
