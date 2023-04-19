const information = {
  name: 'information',
  type: 'document',
  title: 'Information',
  groups: [
    {
      title: 'Social Media',
      name: 'social_media',
    },
  ],
  fields: [
    {
      name: 'instagram_url',
      type: 'url',
      title: 'Instagram',
      description: 'Link para o perfil do Instagram da Pixel.',
      group: 'social_media',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'facebook_url',
      type: 'url',
      title: 'Facebook',
      description: 'Link para o perfil do Facebook da Pixel.',
      group: 'social_media',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkedin_url',
      type: 'url',
      title: 'LinkedIn',
      description: 'Link para o perfil do LinkedIn da Pixel.',
      group: 'social_media',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tiktok_url',
      type: 'url',
      title: 'TikTok',
      description: 'Link para o perfil do TikTok da Pixel.',
      group: 'social_media',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'whatsapp_url',
      type: 'url',
      title: 'WhatsApp',
      description:
        'Link de enviar mensagem para o WhatsApp da Pixel. Esse link pode ser gerado através do da API do WhatsApp (o link tem o formato https://wa.me/55XXXXXXXXXXX).',
      group: 'social_media',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contact_email',
      type: 'email',
      title: 'E-mail de contato',
      description: 'E-mail de contato da Pixel.',
      group: 'social_media',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export default information
