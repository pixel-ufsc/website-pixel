const linksPage = {
  name: 'linksPage',
  title: 'Links úteis',
  type: 'document',
  fields: [
    {
      name: 'links',
      title: 'Links',
      description:
        "Os links da lista serão mostrados na página '/links-uteis' na ordem definida na lista.",
      type: 'array',
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              description: "A URL deve começar com 'http://' ou 'https://' para links externos.",
              type: 'url',

              validation: (Rule) => Rule.required(),
            },
            {
              name: 'highlight',
              title: 'Destaque',
              description: 'Um link marcado como terá um estilo diferente dos links comuns.',
              type: 'boolean',
              initialValue: false,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'open_in_new_tab',
              title: 'Abrir em nova aba',
              description: 'Se marcado, o link será aberto em uma nova aba.',
              type: 'boolean',
              initialValue: true,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'url',
            },
            prepare: ({title, subtitle}) => ({
              title,
              subtitle,
            }),
          },
        },
      ],
    },
  ],

  preview: {
    select: {},
    prepare: () => ({
      title: 'Links úteis',
      subtitle: 'Lista de links da página de links úteis do site.',
    }),
  },
}

export default linksPage
