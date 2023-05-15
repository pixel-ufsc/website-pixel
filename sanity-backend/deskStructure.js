import {RiInformationLine} from 'react-icons/ri'
import {BsFilePersonFill, BsFillClipboardCheckFill} from 'react-icons/bs'
import {BiLink} from 'react-icons/bi'

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
        .child(S.editor().schemaType('linksPage').documentId('links_page')),
      S.listItem()
        .title('Information')
        .icon(RiInformationLine)
        .child(S.editor().schemaType('information').documentId('information')),
    ])
