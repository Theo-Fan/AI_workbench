import { createElement, Fragment, useMemo } from 'react';
import type { CSSProperties, ReactNode } from 'react';

const attributeNames: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  contenteditable: 'contentEditable',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  srcset: 'srcSet',
  'accept-charset': 'acceptCharset',
  'http-equiv': 'httpEquiv',
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'text-anchor': 'textAnchor',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
};

const booleanAttributes = new Set(['disabled', 'required', 'multiple', 'hidden', 'open', 'autofocus', 'controls', 'loop', 'muted', 'playsinline']);
const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

function styleObject(element: HTMLElement): CSSProperties {
  const output: Record<string, string> = {};
  for (let index = 0; index < element.style.length; index += 1) {
    const name = element.style.item(index);
    const value = element.style.getPropertyValue(name);
    const reactName = name.startsWith('--') ? name : name.replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
    output[reactName] = value;
  }
  return output as CSSProperties;
}

function elementProps(element: Element, key: string) {
  const props: Record<string, unknown> = { key };
  const tagName = element.tagName.toLowerCase();
  for (const attribute of Array.from(element.attributes)) {
    const lowerName = attribute.name.toLowerCase();
    if (lowerName === 'style' && element instanceof HTMLElement) {
      props.style = styleObject(element);
      continue;
    }
    if (lowerName.startsWith('on') || lowerName === 'selected') continue;
    if (lowerName === 'value' && tagName === 'input') {
      props.defaultValue = attribute.value;
      continue;
    }
    if (lowerName === 'checked' && tagName === 'input') {
      props.defaultChecked = true;
      continue;
    }
    const name = attributeNames[lowerName] || attribute.name;
    props[name] = booleanAttributes.has(lowerName) ? true : attribute.value;
  }
  if (element.hasAttribute('contenteditable')) props.suppressContentEditableWarning = true;
  if (tagName === 'select') {
    const selected = Array.from(element.querySelectorAll(':scope > option[selected]')).map(option => option.getAttribute('value') || option.textContent || '');
    if (selected.length) props.defaultValue = element.hasAttribute('multiple') ? selected : selected[0];
  }
  if (tagName === 'textarea') props.defaultValue = element.textContent || '';
  return props;
}

function convertNode(node: Node, key: string): ReactNode {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const element = node as Element;
  const tagName = element.tagName.toLowerCase();
  if (tagName === 'script') return null;
  const props = elementProps(element, key);
  if (voidElements.has(tagName) || tagName === 'textarea') return createElement(tagName, props);
  const children = Array.from(element.childNodes).map((child, index) => convertNode(child, `${key}.${index}`));
  return createElement(tagName, props, ...children);
}

/**
 * Converts the exact legacy renderer output to React nodes. React owns every
 * resulting element; no page content is committed through innerHTML.
 */
export function ReactMarkupPage({ markup }: { markup: string }) {
  const nodes = useMemo(() => {
    const document = new DOMParser().parseFromString(`<body>${markup}</body>`, 'text/html');
    return Array.from(document.body.childNodes).map((node, index) => convertNode(node, `legacy.${index}`));
  }, [markup]);
  return <Fragment>{nodes}</Fragment>;
}
