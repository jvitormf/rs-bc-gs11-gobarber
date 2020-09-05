import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvier {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
