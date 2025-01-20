import {RiInformationLine} from 'react-icons/ri'
import {BsFilePersonFill, BsFillClipboardCheckFill, BsPeopleFill} from 'react-icons/bs'
import {BiLink} from 'react-icons/bi'
import {HiUserGroup} from 'react-icons/hi'

/*
This file contains the configuration for the Sanity CMS desk structure.
The desk structure defines the layout and functionality of the Sanity Studio
for managing content in the CMS.

In this configuration, we define a set of content types that will be accessible
from the Studio's navigation menu. Each content type represents a different
section or category of content that can be managed through the CMS.

The code bellow defines how the left menu of the Studio (page where content is
managed) will appear and what content types will be available and clickable.
*/

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Membros')
        .icon(BsFilePersonFill)
        .child(S.documentTypeList('member').title('Membros')),
      S.listItem()
        .title('Portfólio de projetos')
        .icon(BsFillClipboardCheckFill)
        .child(S.documentTypeList('project').title('Portfólio de projetos')),
      S.divider(),
      S.listItem()
        .title('Links úteis')
        .icon(BiLink)
        .child(S.editor().schemaType('linksPage').documentId('linksPage')),
      S.listItem()
        .title('Informações gerais')
        .icon(RiInformationLine)
        .child(S.editor().schemaType('information').documentId('information')),
      S.listItem()
        .title('Processo seletivo')
        .icon(HiUserGroup)
        .child(S.editor().schemaType('selectionProcess').documentId('selectionProcess')),
    ])
