import {RiArchiveLine, RiSettings5Line, RiInformationLine} from 'react-icons/ri'
import {BsFilePersonFill} from 'react-icons/bs'
import {BsFillClipboardCheckFill} from 'react-icons/bs'

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
        .title('Information')
        .icon(RiInformationLine)
        .child(S.editor().schemaType('information').documentId('information')),
      /* S.listItem()
        .title('Settings')
        .icon(RiSettings5Line)
        .child(S.editor().schemaType('site_settings').documentId('site_settings')), */
      //...S.documentTypeListItems(),
    ])
