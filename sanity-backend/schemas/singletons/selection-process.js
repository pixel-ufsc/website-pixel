const selectionProcess = {
  name: 'selectionProcess',
  title: 'Processo seletivo',
  type: 'document',
  fields: [
    {
      name: 'active',
      title: 'Ativo',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
      initialValue: false,
    },
    {
      name: 'form_url',
      title: 'Formulário',
      description:
        'URL do formulário de inscrição para processo seletivo. IMPORTANTE: Adicione o link formulário na página de links úteis também.',
      type: 'url',
      hidden: ({document}) => !document.active, // Hide this field if the selection process is not active
    },
  ],

  preview: {
    select: {
      active: 'active',
    },
    prepare({active}) {
      return {
        title: 'Processo seletivo',
        subtitle: active ? 'Ativo' : 'Inativo',
      }
    },
  },
}

export default selectionProcess
