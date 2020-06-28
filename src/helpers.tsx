import dompurify from 'dompurify';
import anchorme from 'anchorme';
import { Story, Urlable } from './services/node-hnapi';

export const renderMarkup = (markup: string): { __html: string } => {
  const sanitized = dompurify.sanitize(markup);
  const anchored = anchorme(sanitized, {
    attributes: [
      {
        name: "rel",
        value: "nofollow noopener noreferrer"
      }
    ]
  });
  return ({ __html: anchored });
}

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
}

export const discussion = (data: Story): string => {
  if (data.type === 'job') return '';
  if (data.comments_count > 0) {
    return `${data.comments_count} comments`;
  }
  return 'discuss';
}

export const getPath = (data: Urlable): string => `/item/${data.id}`;

const isValidUrl = (string: string): boolean => {
  try {
    new URL(string);
    return true;
  } catch (e) {
    return false;
  }
}

export const getLinkUrl = (data: Story): string =>
  isValidUrl(data.url) ?
    data.url :
    getPath(data)

export const setTitle = (title: string): void => {
  document.title = `${title ? ucFirst(title) + ' - ' : ''} React HN`;
}

export const ucFirst = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
